const calculateStylePoints = (styleNotes) => {
    
    if (!Array.isArray(styleNotes)) {

    return 'wrong type od styleNotes';

    } else if (styleNotes.length !== 5) {
    
    return "there are not enough judges'notes";

    } else if (styleNotes.filter( note => typeof note === 'number').length < 5) {
    
    return "judges'notes should be a number";
    
    }

    const maxValue = Math.max.apply(Math, styleNotes);

    const indexOfMaxValue = styleNotes.indexOf(maxValue);
  
    styleNotes.splice(indexOfMaxValue, 1);

    const minValue = Math.min.apply(Math, styleNotes);
  
    const indexOfMinValue = styleNotes.indexOf(minValue);
  
    styleNotes.splice(indexOfMinValue, 1);

    let suma = 0;   
    for (let i = 0; i < styleNotes.length; i++) { 
        suma = suma + styleNotes[i]; 
    } 

    return suma;
    
};
  
module.exports = calculateStylePoints;