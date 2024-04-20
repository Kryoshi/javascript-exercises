const palindromes = function (string) {
    string = string.toUpperCase();
    let array = string.split('');
    array = array.filter((char) => (/[a-zA-Z\d]/).test(char));
    string = array.join('');
    array.reverse();
    let reversed = array.join('');
    return (string === reversed);
};

// Do not edit below this line
module.exports = palindromes;