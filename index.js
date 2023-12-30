const generateClient = require('./utility/generateClient');
const config = require("./config");
const unzip = require('./utility/unzip');
const swaggerGenDocker = require('./utility/swaggerGenDocker');
const fs = require("fs");

const outputPath = "./.generated/typescript-angular-client-generated.zip";
const extractedPath = `./.generated/typescript-angular-client-generated`;
const codeType = 'CLIENT';
const targetLanguage = 'typescript-angular';

(async () => {
    try {
      

        console.log(`Checking Docker status...`);
        if (!await swaggerGenDocker.ensureDockerDaemonIsRunning()) {
            console.error('Docker daemon is not running and cannot run it. Exiting...');
            return;
        }

        console.log(`Checking SwaggerGen Docker Container`)
        const dockerContainer = await swaggerGenDocker.swaggerGenUp(config.swaggerContainerPreferedExternalPort);

        if (dockerContainer) {

            console.log(`Calling SwaggerGen ... Generating Code`);
            await generateClient(config.baseGenUrl, config.swaggerJsonUrl, codeType, targetLanguage, outputPath);

            console.log(`Extracting ${outputPath}`);
            await unzip(outputPath, extractedPath);

            console.log(`Removing ${outputPath}`);
            await fs.unlinkSync(outputPath);

            console.log(`File downloaded ane extracted as ${extractedPath}`);

            dockerContainer.kill();
        }

    }
    catch (e) {
        console.error(e);
        throw e;
    }


})();
