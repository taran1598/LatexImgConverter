import { visionAPI } from '../visionAI/visionAPI';


export class latexFacade {

    constructor () {
        // here so we can construct the object latexFacade
    }

    /**
     * TODO: Change asynchronous call to use promises instead
     * High-level method to call vision AI to extract text
     * @param fileName
     * @returns {Promise<void>}
     */
    async visionAPI(fileName) {
        // TODO: This should return parsed text from JSON in a format
        //  that will later be used to convert to latex
        let vision = new visionAPI();
        let detections = await vision.getTextFromFile(fileName).catch(reason => console.log(reason));
        console.log(detections); // here so we can see that the API does return something
        return fileName; // only here to testing purposes
    }

    /**
     * Function that will be called to process un-zipped image from the front
     * end. Goal of this function is to ensure the image is more clear.
     * @param image
     */
    processImage(image) {
        // TODO:
    }

    /**
     * Takes a text 'object' (to be defined what it is later) and  converts it
     * to a .tex file
     * @param text: iterable text object to be converted to latex file
     * @return latexFile: .tex file
     */
    convertToLatex(text) {
        // TODO:
    }

}

// here to test if the server is working
// let index1 = new latexFacade();
// index1.visionAPI('./example1.jpg');
