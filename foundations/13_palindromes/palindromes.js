const palindromes = function (phrase) {
    // Split phrase into array of lowercase letters
    let phraseArr = phrase.toLowerCase().split("");

    // If any character in the array is not a lowercase letter and not number, remove it
    for (let i = 0; i < phraseArr.length; i++) {
        if (!(phraseArr[i] >= "a" && phraseArr[i] <= "z") && !(phraseArr[i] >= "0" && phraseArr[i] <= "9")) {
            phraseArr.splice(i, 1);
            // Recalibrate the index search if item at index is removed
            i--;
        } 
    }

    // If the joined phrase equals to the reversed joined phrase, return true, else return false
    if (phraseArr.join("") === phraseArr.reverse().join("")) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
