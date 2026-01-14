/*
Take in array and target value array
Use for of loop to iterate through each target value array item:
    While target value is present in the array:
        Get index of target value
        From array, splice the target at index one time
Return array
*/
const removeFromArray = function(array, ...targets) {
    for (const target of targets) {
        while (array.includes(target) === true) {
            let index = array.indexOf(target);
            array.splice(index, 1);
        }
    }
    return array;
}

// Do not edit below this line
module.exports = removeFromArray;
