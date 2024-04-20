const findTheOldest = function(people) {
    return people.reduce((oldest, person) => (age(oldest) > age(person)? oldest : person));
};

function age(person) {
    if (person.yearOfDeath) return person.yearOfDeath - person.yearOfBirth;
    else return (new Date().getFullYear()) - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
