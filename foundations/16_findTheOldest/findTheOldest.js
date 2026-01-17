const findTheOldest = function(array) {
    // Get today's year in case a person has no yearOfDeath property
    const today = new Date();
    const year = today.getFullYear();

    return array.reduce((obj, person) => {
        // If there is no yearOfDeath property for either person being compared, create it and assign today's year to it
        if (!obj.hasOwnProperty('yearOfDeath')) {
            obj['yearOfDeath'] = year;
        } else if (!person.hasOwnProperty('yearOfDeath')) { 
            person['yearOfDeath'] = year;
        }

        // If the latter person is older than the former, return the latter person object, else return the former person object
        if ((person.yearOfDeath - person.yearOfBirth) > (obj.yearOfDeath - obj.yearOfBirth)) {
            return person;
        } else {
            return obj;
        }
    });
};

// Do not edit below this line
module.exports = findTheOldest;
