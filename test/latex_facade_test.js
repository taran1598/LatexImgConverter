import {describe} from "mocha";
import {latexFacade} from "../src/controller/latexFacade";
import * as chai from 'chai'
let expect = chai.expect;
let assert = chai.assert;
let should = chai.should();


describe("Test for VisionAPI", function () {

    // example of how to write a test for asynchronous function
    it('Simple call to Vision AI', function () {
        const fileName = './example1.jpg';
        let vision = new latexFacade();
        return vision.visionAPI(fileName).then(result => {
            expect(result).to.equal(fileName);
        }).catch(err => {
            expect.fail(err, fileName, "Should have passed");
        })

    });
});
