const { exec, execSync } = require(`child_process`);

function swaggerGenUp(externalPort) {
    const readinessLog = `Started ServerConnector`;
    return new Promise(async (resolve, reject) => {
        try {
            const containerName = "swaggerCodeGen";
            const imageName = 'swaggerapi/swagger-generator-v3:latest'
            
            // check if it`s exists 
            const checkExsistsCommand = `docker ps -a --filter "name=${containerName}" --quiet`;
            const checkAlreadyRunningCommand = `docker ps -a --filter "name=${containerName}" --filter "status=running" --quiet`;
            const exists = execSync(checkExsistsCommand).toString().trim() !== ``;
            const running = execSync(checkAlreadyRunningCommand).toString().trim() !== ``;
            if (exists && running) {
                console.log(`${containerName} is up and running `)
                // check if running
                return resolve();
            }


            let command = null;
            if (exists && !running) {
                // it`s exists but not running
                // start it 
                command = `docker start ${containerName}`;
                // remove old logs
            }
            else {
                // container does not exist
                // run it for the first
                command = `docker run --name=${containerName} --user=codegenuser --env=PATH=/opt/java/openjdk/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin --env=container=oci --env=disableOas31Resolve=False --env=JAVA_HOME=/opt/java/openjdk --env=JETTY_HOME=/jetty_home --env=JETTY_BASE=/generator --env=HTTP_PORT=8080 --env=JAVA_MEM=1024m --env=EXIT_ON_OUTOFMEMORYERROR= --workdir=/generator --runtime=runc -d -p ${externalPort}:${externalPort} ${imageName}`;
            }


            console.log(`executing ${command}`);

            exec(command, (error, stdout, stderr) => {
                if (error) {
                    reject(`Error starting container: ${error.message}`);
                    return;
                }
                if (stderr) {
                    reject(`Error starting container: ${stderr}`);
                    return;
                }

                // Container started, now fetch its logs
                const containerId = stdout.trim();
                const logCommand = `docker logs -f ${containerId} --tail=5`;

                console.log(`executing Logs command : ${logCommand}`);
                const logProcess = exec(logCommand, (logError, logStdout, logStderr) => {
                    console.log(logStdout);
                });

                logProcess.stdout.on(`data`, (data) => {
                    _handleContainerReady(data, resolve, containerId, logProcess);
                });

                logProcess.stderr.on(`data`, (data) => {
                    _handleContainerReady(data, resolve, containerId, logProcess);
                });
            });
        } catch (e) {
            reject(e);
            return;
        }
    });

    function _handleContainerReady(data, resolve, containerId, logProcess) {
        if (data.includes(readinessLog)) {
            logProcess.kill();
            resolve(`Container is ready. ID: ${containerId}`);
        }
    }



}

module.exports = swaggerGenUp;