const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((sum, number) => sum + number, 0);
};

const multiply = function(array) {
  return array.reduce((product, number) => product * number, 1);
};

const power = function(a, b) {
  return a ** b;
	
};

const factorial = function(i) {
  let factorial = 1;
  for (i; i > 0; --i) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
