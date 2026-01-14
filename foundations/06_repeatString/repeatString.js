/*
Take in string and num
Initialize newString variable
For num amount of loops
    Concatenate string to newString variable
Return newString
*/
const repeatString = function(string, num) {
    let newString = '';

    for (let i = 0; i < num; i++){
        newString += string;
    }

    if (num < 0) return 'ERROR';
    else return newString; 
};

// Do not edit below this line
module.exports = repeatString;
