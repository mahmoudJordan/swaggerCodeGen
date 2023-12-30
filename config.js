const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const os = require('os');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const config = require('./config');


const argv = yargs(hideBin(process.argv)).argv;

// Function to generate a random file name
function getRandomFileName() {
    return crypto.randomBytes(16).toString('hex') + '.zip';
}

// Function to get a temporary file path with a random file name
function getTempFilePath() {
    const tempFileName = getRandomFileName();
    const tempFilePath = path.join(os.tmpdir(), tempFileName);
    fs.closeSync(fs.openSync(tempFilePath, 'w')); // Create the file if it doesn't exist
    return tempFilePath;
}

let _swaggerContainerPreferedExternalPort= argv.swaggerContainerPreferedExternalPort || 9679;

module.exports = {
    generatedZipPath: argv.generatedZipPath || getTempFilePath(),
    output: argv.output || path.join(os.tmpdir(), getRandomFileName().replace('.zip', '')),
    codeType: argv.codeType || 'CLIENT',
    targetLanguage: argv.targetLanguage || 'typescript-angular',
    swaggerJsonUrl: argv.swaggerJsonUrl || 'https://stakeholders-api.dev.beaconconnect.app/swagger/v1/swagger.json',
    swaggerContainerPreferedExternalPort: _swaggerContainerPreferedExternalPort,
    baseGenUrl: argv.baseGenUrl || `http://127.0.0.1:${_swaggerContainerPreferedExternalPort}`
};
