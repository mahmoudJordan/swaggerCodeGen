const net = require('net');

/**
 * Checks if a port is in use, and if so, finds an available port.
 * @param {number} startPort - The initial port to check.
 * @returns {Promise<number>} A promise that resolves with an available port number.
 */
function findAvailablePort(startPort) {
    return new Promise((resolve, reject) => {
        let port = startPort;

        const server = net.createServer();

        server.listen(port, () => {
            // Port is available
            server.close(() => {
                resolve(port);
            });
        });

        server.on('error', (err) => {
            if (err.code === 'EADDRINUSE') {
                // Port is in use, try the next port
                console.log(`Port ${port} is in use, checking the next one.`);
                port++;
                server.listen(port);
            } else {
                reject(err);
            }
        });
    });
}


module.exports = findAvailablePort;

// Example usage
// findAvailablePort(3000)
//     .then(port => console.log(`Found available port: ${port}`))
//     .catch(error => console.error('Error:', error));
