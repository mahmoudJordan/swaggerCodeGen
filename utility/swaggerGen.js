const Docker = require('dockerode');
const docker = new Docker();
const { findContainer, ensureImageExists, startExistingContainer } = require('./dockerUtils');



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
            await container.restart();
        }

        // Wait for readiness log
        await waitForReadiness(container, readinessLog);
        console.log(`Container is ready. ID: ${container.id}`);

        return container;
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

function waitForReadiness(container, logString) {
    return new Promise(async (resolve, reject) => {
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



module.exports = swaggerGenUp;