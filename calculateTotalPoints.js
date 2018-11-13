const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor = 0, gateFactor = 0) => {
    
    if (typeof windFactor !== 'number') {

    	return 'wrong type of windFactor';

    } else if (typeof gateFactor !== 'number') {

    	return 'wrong type of gateFactor';

    }

    const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
    const stylePoints = calculateStylePoints(styleNotes);

 return (distancePoints + stylePoints + windFactor + gateFactor).toFixed(1);
     
};

module.exports = calculateTotalPoints;