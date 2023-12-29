const fs = require('fs');
const http = require('http');
const https = require('https');

/**
 * Downloads a file from a URL and saves it to a specified path.
 * @param {string} url - The URL of the file to download.
 * @param {string} path - The local path where the file should be saved.
 */
function downloadFile(url, path) {
    return new Promise((resolve, reject) => {
        // Choose the correct protocol based on the URL
        const protocol = url.startsWith('https') ? https : http;

        protocol.get(url, response => {
            // Check if the request was successful
            if (response.statusCode !== 200) {
                reject(`Failed to download file: Status Code ${response.statusCode}`);
                return;
            }

            // Create a write stream to the specified path
            const fileStream = fs.createWriteStream(path);
            response.pipe(fileStream);

            fileStream.on('error', err => {
                reject(err);
            });

            fileStream.on('finish', () => {
                fileStream.close();
                resolve(`File downloaded and saved to ${path}`);
            });
        }).on('error', err => {
            reject(err);
        });
    });
}



module.exports = downloadFile;


// Example usage
// const message = await downloadFile('https://stakeholders-api.dev.beaconconnect.app/swagger/v1/swagger.json', './swagger.json');
// console.log(message);