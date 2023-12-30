const { ensureDockerDaemonIsRunning } = require('../utility/dockerUtils');
const swaggerGenUp = require('../utility/swaggerGen');

exports.ensureDockerDaemonIsRunning = ensureDockerDaemonIsRunning;

exports.manageDockerContainer = async (port) => {
    return await swaggerGenUp(port);
};
