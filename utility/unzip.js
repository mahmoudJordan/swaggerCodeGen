const AdmZip = require("adm-zip");

function extractFile(input, output) {
    return new Promise((resolve, reject) => {
        try {
            const zip = new AdmZip(input);
            zip.extractAllTo(output);
            console.log("Finished Extracting");
            resolve();
        } catch (e) {
            console.error(e);
            reject(e);
        }
    });
}


module.exports = extractFile;
