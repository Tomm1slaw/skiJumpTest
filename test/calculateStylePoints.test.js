const assert = require('assert');
const calculateStylePoints = require('../calculateStylePoints');

describe('calculateStylePoints', () => {
    describe('style points', ()=> {
        it("should return style points if judges'notes are natural numbers", () =>{
            const actual = calculateStylePoints([18, 19, 17, 16, 15]);

            const expected = 51;

            assert.equal(actual, expected);
        });

        it("should return style points if judges'notes are decimal numbers", () => {
            const actual = calculateStylePoints([17.5, 18.5, 16.5, 17, 18]);

            const expected = 52.5;

            assert.equal(actual, expected);
        });

        it("should return style points if judges'notes are repeating", () => {
            const actual = calculateStylePoints([15, 12, 15, 12, 15]);

            const expected = 42;

            assert.equal(actual, expected);
        });

        it("should return 'wrong type od styleNotes' if styleNotes is different than array", ()=> {
            const actual = calculateStylePoints(19, 19.5, 19, 19, 19);

            const expected = 'wrong type od styleNotes';

            assert.equal(actual, expected);
        });

        it("should return 'there are not enough judges'notes' if there are not enough judges'notes", () => {
            const actual = calculateStylePoints([16, 17, 16, 16.5]);

            const expected = "there are not enough judges'notes";

            assert.equal(actual, expected);
        });

        it("should return 'judges'notes should be a number' if judges'notes are different than number", () => {
            const actual = calculateStylePoints(['16', 15.5, 16, '17', 15]);

            const expected = "judges'notes should be a number";

            assert.equal(actual, expected);
        });

    });

})