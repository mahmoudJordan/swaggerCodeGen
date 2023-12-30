const callGenerateClient = require('../utility/callGenerateClient');
const unzip = require('../utility/unzip');
const fs = require("fs");

exports.generateClient = async (config) => {
    console.log(`Calling SwaggerGen ... Generating Code`);
    await callGenerateClient(config.baseGenUrl, config.swaggerJsonUrl, config.codeType, config.targetLanguage, config.generatedZipPath);
};

exports.extractAndCleanup = async (generatedZipPath, extractedPath) => {
    console.log(`Extracting ${generatedZipPath}`);
    await unzip(generatedZipPath, extractedPath );

    console.log(`Removing ${generatedZipPath}`);
    await fs.unlinkSync(generatedZipPath);

    console.log(`File downloaded and extracted as ${extractedPath}`);
};
