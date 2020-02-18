import { visionAPI } from '../visionAI/VisionAPI';
//
// let math1 = new visionAPI();
//
// console.log(math1.add(1,2));

const express = require('express');
const app = express();

// Creates a server
// to run type npm run server in terminal
// app.listen(5000, '127.0.0.1', ()=> console.log('Server Running'));

export class latexFacade {

    constructor () {

    }

    /**
     * High-level method to call vision AI to extract text
     * @param fileName
     * @returns {Promise<void>}
     */
    async visionAPI(fileName) {
        // TODO: This should return 'something' that will later be used to convert to latex
        let vision = new visionAPI();
        let detections = await vision.getTextFromFile(fileName).catch(reason => console.log(reason));
        console.log(detections);
        return fileName; // only here to testing purposes
    }

}

let index1 = new latexFacade();
index1.visionAPI('./example1.jpg');
