function add(...numbers) {
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  if (sum > 1000) {
    return 'too big';
  }
  return sum;
}

function subtract(...numbers) {
  const result = numbers.reduce((acc, cur) => acc - cur);
  if (result < 0) {
    return 'negative number';
  }
  return result;
}

function multiply(...numbers) {
  const product = numbers.reduce((acc, cur) => acc * cur, 1);
  if (product > 1000) {
    return 'big big number';
  }
  return product;
}

function divide(...numbers) {
  const result = numbers.reduce((acc, cur) => acc / cur);
  if (!isFinite(result)) {
    throw new Error('Divide by zero');
  }
  return Math.floor(result);
}

module.exports = { add, subtract, multiply, divide };