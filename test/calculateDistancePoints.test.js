const assert = require('assert');
const calculateDistancePoints = require('../calculateDistancePoints');

describe('calculateDistancePoints', () => {
    describe('hillSize', () => {
        it('should return distance points for "normal" hillSize', () => {
            const actual = calculateDistancePoints(100, 'normal', 100);
    
            const expected = 60;
    
            assert.equal(actual, expected);
        });
        
        it('should return distance points for "big" hillSize', () => {
            const actual = calculateDistancePoints(100, 'big', 100);
    
            const expected = 60;
    
            assert.equal(actual, expected);
        }); 

        it('should return distance points for "mamut" hillSize', () => {
            const actual = calculateDistancePoints(100, 'mamut', 100);

            const expected = 120;

            assert.equal(actual, expected);
        });

        it('should return "wrong hillSize" if the hillSize is different than: "normal", "big", "mamut"', () => {
            const actual = calculateDistancePoints(100, 'small', 100);

            const expected = 'wrong hillSize';

            assert.equal(actual, expected);
        });

        it('should return "wrong type of data" if type of hillSize is different than "string"', () => {
            const actual = calculateDistancePoints(100, 100, 'normal');

            const expected = 'wrong type of data';
            
            assert.equal(actual, expected);
        });

    });



    describe('distance', () => {
        it('should return distance points if distance is a natural number', () => {
            const actual = calculateDistancePoints(110, 'normal', 100);

            const expected = 80;

            assert.equal(actual, expected);
        });

        it('should return distance points if distance is a decimal number', () => {
            const actual = calculateDistancePoints(210.5, 'normal', 200);

            const expected = 81;

            assert.equal(actual, expected); 
        });

        it('should return "wrong type of data" if type of distance is different than "number" ', () => {
            const actual = calculateDistancePoints("100", 'normal', 100);

            const expected = 'wrong type of data';

            assert.equal(actual, expected);
        });

    });    

    describe('kPoint', () => {
        it('should return distance points if kPoint is a natural number', () => {
            const actual = calculateDistancePoints(100, 'normal', 110);

            const expected = 40;

            assert.equal(actual, expected);
        });

        it('should return "wrong type of data" if type of kPoint is different than "number" ', () => {
            const actual = calculateDistancePoints(100, 'normal', "100");

            const expected = 'wrong type of data';

            assert.equal(actual, expected);
        });

    });            

})    