const unzipper = require('unzipper');
const fs = require("fs");

function extractFile(input, output) {
    return new Promise((resolve, reject) => {
        fs.createReadStream(input)
            .pipe(unzipper.Extract({ path: output }))
            .on('close', () => {
                resolve();
                console.log("Finished");
            })
            .on("error", (error) => {
                reject(error);
            })

    });
}


module.exports = extractFile;
