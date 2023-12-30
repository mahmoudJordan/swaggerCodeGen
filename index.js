const config = require('./config');
const { ensureDockerDaemonIsRunning, manageDockerContainer } = require('./services/dockerService');
const { generateClient, extractAndCleanup } = require('./services/swaggerService');


(async () => {
    let dockerContainer = null;
    try {
        console.log(`Checking Docker status...`);
        if (!await ensureDockerDaemonIsRunning()) {
            console.error('Docker daemon is not running. Exiting...');
            return;
        }

        console.log(`Checking SwaggerGen Docker Container`);
        dockerContainer = await manageDockerContainer(config.swaggerContainerPreferedExternalPort);

        if (dockerContainer) {
            await generateClient(config);
            await extractAndCleanup(config.generatedZipPath, config.output);
            dockerContainer.logs
            dockerContainer.kill();
        }
    } catch (e) {
        console.error(e);
        if (dockerContainer){
            dockerContainer.kill();
        }
        throw e;
    }
})();




// sample usage
// node index.js --generatedZipPath="./.generated/typescript-angular-client-generated.zip" --output="./.generated/typescript-angular-client-generated" --codeType="CLIENT" --targetLanguage="typescript-angular" --swaggerJsonUrl="https://stakeholders-api.dev.beaconconnect.app/swagger/v1/swagger.json" --swaggerContainerPreferedExternalPort=8081 --baseGenUrl="http://localhost:8080"
// node index.js --output="./.generated/typescript-angular-client-generated" --codeType="CLIENT" --targetLanguage="typescript-angular" --swaggerJsonUrl="https://stakeholders-api.dev.beaconconnect.app/swagger/v1/swagger.json"
