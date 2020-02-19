
const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient({
    keyFilename: './googleKey.json'
});

export class visionAPI {

    constructor() {
        // here so we can construct the object
    }
    /**
     *
     * @param fileName: location of the file
     * @returns {Promise<void>}
     */
    async getTextFromFile(fileName) {
        // Performs text detection on the local file
        const [result] = await client.textDetection(fileName);
        const detections = result.textAnnotations;
        console.log('Text:');
        // detections.forEach(text => console.log(text));
        return detections;
    }
}
