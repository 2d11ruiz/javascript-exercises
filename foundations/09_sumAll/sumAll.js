const sumAll = function(startNum, endNum) {
    
    if (startNum < 0 ||
        endNum < 0 || 
        typeof startNum !== 'number' ||
        typeof endNum !== 'number' ||
        !Number.isInteger(startNum) ||
        !Number.isInteger(endNum)
    ) { 
        return "ERROR";
    }
    
    let tempNum = startNum;
    if (startNum > endNum) {
        startNum = endNum;
        endNum = tempNum;
    }

    const spanNum = endNum - startNum - 1;
    let arrayNum = [startNum, endNum];

    for (let i = 0; i < spanNum; i++) {
        arrayNum.push(startNum + i + 1);
    }

    const sumNum = arrayNum.reduce((sum, current) => sum + current);
    return sumNum;
};

// Do not edit below this line
module.exports = sumAll;
