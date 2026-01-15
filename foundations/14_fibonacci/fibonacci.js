const fibonacci = function(a) {
    // Convert string to number
    let num = Number(a);

    // Set up sequence array with known preexisting values
    let numArr = [0, 1];

    // Return error if number below 0 entered
    if (num < 0) {
        return "OOPS";
    }
    // Return existing 0th or 1st sequence numbers from array if 0 or 1 entered
    else if (num === 0 || num === 1) {
        return numArr[num];
    } else {
        // Insert numbers into sequence array up to and including the position number entered
        for (let i = 2; i < num + 1; i++) {
            // Fn = Fn - 1 + Fn - 2
            numArr[i] = numArr[i-1] + numArr[i-2];
        }
        // Return the number in the sequence at position number entered
        return numArr[num];
    }
};

// Do not edit below this line
module.exports = fibonacci;
