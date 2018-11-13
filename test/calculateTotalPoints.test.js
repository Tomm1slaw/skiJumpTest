const assert = require('assert');
const calculateTotalPoints = require('../calculateTotalPoints');

describe('calculateTotalPoints', () => {
    describe('windFactor', () => {

        it('should return total points if windFactor is a positive number', () => {
            const actual = calculateTotalPoints(100, 'normal', 100, [16, 16.5, 17, 17.5, 18], 8, -8.4);

            const expected = 110.6;

            assert.equal(actual, expected);
        });

        it('should return total points if windFactor is a positive decimal number', () => {
            const actual = calculateTotalPoints(100, 'normal', 100, [16, 16.5, 17, 17.5, 18], 8.2, -8.4);

            const expected = 110.8;

            assert.equal(actual, expected);
        });

        it('should return total points if windFactor is a negativ number', () => {
            const actual = calculateTotalPoints(100, 'normal', 100, [16, 16.5, 17, 17.5, 18], -8, -8.4);

            const expected = 94.6;

            assert.equal(actual, expected);
        });

        it('should return total points if windFactor is a negativ decimal number', () => {
            const actual = calculateTotalPoints(100, 'normal', 100, [16, 16.5, 17, 17.5, 18], -8.2, -8.4);

            const expected = 94.4;

            assert.equal(actual, expected);
        });
        
        it('should return total points if windFactor is equal to zero', () => {
            const actual = calculateTotalPoints(100, 'normal', 100, [16, 16.5, 17, 17.5, 18], 0, -8.4);

            const expected = 102.6;

            assert.equal(actual, expected);
        });

        it('should return "wrong type of windFactor" if windFactor is different then "number"', () => {
            const actual = calculateTotalPoints(100, 'normal', 100, [16, 16.5, 17, 17.5, 18], "0", -8.4);

            const expected = 'wrong type of windFactor';

            assert.equal(actual, expected);
        });

    });

    describe('gateFactor', () => {

        it('should return total points if gateFactor is a number', () => {
            const actual = calculateTotalPoints(100, 'normal', 100, [16, 16.5, 17, 17.5, 18], 8.2, -8);

            const expected = 111.2;

            assert.equal(actual, expected);
        });

        it('should return total points if gateFactor is a decimal number', () => {
            const actual = calculateTotalPoints(100, 'normal', 100, [16, 16.5, 17, 17.5, 18], -8.2, -8.4);

            const expected = 94.4;

            assert.equal(actual, expected);
        });

        it('should return total points if gateFactor is equal to zero', () => {
            const actual = calculateTotalPoints(100, 'normal', 100, [16, 16.5, 17, 17.5, 18], 8.2, 0);

            const expected = 119.2;

            assert.equal(actual, expected);
        });

        it('should return "wrong type of gateFactor" if gateFactor is different then "number"', () => {
            const actual = calculateTotalPoints(100, 'normal', 100, [16, 16.5, 17, 17.5, 18], 8.2, "-8.4");

            const expected = 'wrong type of gateFactor';

            assert.equal(actual, expected);
        });

    })

     describe('total points', () => {

        it('should return total points with the accuracy of one decimal place', () => {
            const actual = calculateTotalPoints(100, 'normal', 100, [16, 16.5, 17, 17.5, 18], -8.2, -8.4);
    
            const expected = '94.4';
    
            assert.equal(actual, expected);
        });

    })

});