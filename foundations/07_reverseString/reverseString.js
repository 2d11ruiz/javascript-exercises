/*
Take in string
Initialize 'reversed' variable and set equal to:
    Split string into array of characters
    Reverse the array
    Join array of characters into string
Return 'reversed' variable
*/
const reverseString = function(string){
    let reversed = string.split('').reverse().join('');
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
