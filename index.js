const generateClient = require('./utility/generateClient');
const config = require("./config");
const unzip = require('./utility/unzip');
const swaggerGenUp = require('./utility/swaggerGenUp');
const fs = require("fs");
 
const outputPath = "./generated/typescript-angular-client-generated.zip";
const extractedPath = `./generated/typescript-angular-client-generated`;


(async () => {
    await swaggerGenUp(config.swaggerContainerPreferedExternalPort);
    await generateClient(config.baseGenUrl, config.swaggerJsonUrl, 'CLIENT', 'typescript-angular', outputPath);
    await unzip(outputPath, extractedPath);
    await fs.unlinkSync(outputPath);
    console.log(`File downloaded ane extracted as ${extractedPath}`)
})();
