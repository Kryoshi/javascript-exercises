const fibonacci = function(n) {
    if (n >= 0) {
        let last = 0;
        let next = 1;
        for (let i = 0; i < +n; ++i) {
            let temp = next;
            next += last;
            last = temp;
        }
        return last;
    }
    return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
