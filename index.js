const generateClient = require('./utility/generateClient');
const config = require("./config");
const unzip = require('./utility/unzip');
const swaggerGenUp = require('./utility/swaggerGenUp');
const fs = require("fs");

const outputPath = "./.generated/typescript-angular-client-generated.zip";
const extractedPath = `./.generated/typescript-angular-client-generated`;
const codeType = 'Client';
const targetLanguage = 'typescript-angular';

(async () => {

    
    console.log(`Checking SwaggerGen Docker Container`)
    await swaggerGenUp(config.swaggerContainerPreferedExternalPort);

    console.log(`Calling SwaggerGen ... Generating Code`);
    await generateClient(config.baseGenUrl, config.swaggerJsonUrl, codeType,targetLanguage , outputPath);

    console.log(`Extracting ${outputPath}`);
    await unzip(outputPath, extractedPath);

    console.log(`Removing ${outputPath}`);
    await fs.unlinkSync(outputPath);

    console.log(`File downloaded ane extracted as ${extractedPath}`)
})();
