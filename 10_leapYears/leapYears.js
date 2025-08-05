const leapYears = function(yearIn) {
    
    function db4 (year) {
        if (year % 4 === 0) {
            return true;
        }
    }

    function db100 (year) {
        if (year % 100 !== 0) {
            return false;
        }
    }

    function db400 (year) {
        if (year % 400 === 0){
            return true;
        }
    }

    if ((db4(yearIn) === true && db100(yearIn) === false) || db400(yearIn) === true) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
