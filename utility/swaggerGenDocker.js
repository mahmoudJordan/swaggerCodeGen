const Docker = require('dockerode');
const docker = new Docker(); // connects to Docker daemon


async function ensureDockerDaemonIsRunning() {
    try {
        // Ping the Docker daemon
        const data = await docker.ping();
        if (data.toString() === 'OK') {
            console.log('Docker daemon is running.');
            return true;
        } else {
            console.error('Failed to connect to Docker daemon.');
            return false;
        }
    } catch (error) {
        console.error(`Error connecting to Docker daemon: ${error.message}`);
        return false;
    }
}

async function swaggerGenUp(externalPort) {
    const readinessLog = 'Started ServerConnector';
    const containerName = "swaggerCodeGen";
    const imageName = 'swaggerapi/swagger-generator-v3:latest';

    try {
        // Check if image exists locally, if not pull it
        await ensureImageExists(imageName);

        // Check if the container already exists
        let containerInfo = await findContainer(containerName);
        let container = null;
        if (containerInfo) {
            container = docker.getContainer(containerInfo.Id);

            if (container) {
                await startExistingContainer(containerInfo, container);
            }
        } else {
            // Create and start a new container
            container = await docker.createContainer({
                Image: imageName,
                name: containerName,
                Tty: false,
                ExposedPorts: { '8080/tcp': {} },
                HostConfig: {
                    PortBindings: { '8080/tcp': [{ HostPort: `${externalPort}` }] }
                }
            });
            await container.start();
        }

        // Wait for readiness log
        await waitForReadiness(container, readinessLog);
        console.log(`Container is ready. ID: ${container.id}`);

        return container;
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

async function ensureImageExists(imageName) {
    try {
        const images = await docker.listImages({ filters: { reference: [imageName] } });
        if (images.length === 0) {
            console.log(`Image not found locally. Pulling ${imageName}...`);
            await pullImage(imageName);
        }
    } catch (error) {
        console.error(`Error checking/pulling image: ${error.message}`);
        throw error;
    }
}

function pullImage(imageName) {
    return new Promise((resolve, reject) => {
        docker.pull(imageName, function (err, stream) {
            if (err) {
                return reject(err);
            }
            docker.modem.followProgress(stream, (err, res) => err ? reject(err) : resolve(res));
        });
    });
}

async function findContainer(name) {
    const containers = await docker.listContainers({ all: true });
    const containerInfo = containers.find(c => c.Names.some(n => n === `/${name}`));
    return containerInfo;
}


async function startExistingContainer(containerInfo, container) {
    if (containerInfo.State === 'running') {
        console.log(`Container is already running.`);
        return container;
    }
    await container.start();
    return container;
}

function waitForReadiness(container, logString) {
    return new Promise((resolve, reject) => {
        const logStream = require('stream').PassThrough();
        logStream.on('data', function (chunk) {
            const logChunk = chunk.toString();
            console.log(logChunk);
            if (logChunk.includes(logString)) {

                logStream.destroy();
                resolve();
            }
        });

        logStream.on('error', function (chunk) {
            const logChunk = chunk.toString();
            if (logChunk.includes(logString)) {
                logStream.destroy();
                resolve();
            }
        });

        container.logs({
            follow: true,
            stdout: true,
            stderr: true,
            tail: 5
        }, function (err, stream) {
            if (err) {
                return reject(err);
            }
            container.modem.demuxStream(stream, logStream, logStream);
            stream.on('end', function () {
                logStream.end('');
            });
        });
    });
}

module.exports = {
    swaggerGenUp,
    ensureDockerDaemonIsRunning
};
