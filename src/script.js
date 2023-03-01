const { add, subtract, multiply, divide } = require('./calculator');

const [operation, ...numbers] = process.argv.slice(2);

if (numbers.length < 1 || numbers.length > 30) {
  console.error('Error: Please provide between 1 and 30 arguments.');
  process.exit(1);
}

numbers.forEach((arg, i) => {
  const num = Number(arg);
  if (isNaN(num)) {
    console.error(`Error: ${arg} is not a number.`);
    process.exit(1);
  }

  numbers[i] = num
});

switch (operation) {
  case 'add':
    console.log(add(...numbers));
    break;
  case 'subtract':
    console.log(subtract(...numbers));
    break;
  case 'multiply':
    console.log(multiply(...numbers));
    break;
  case 'divide':
    console.log(divide(...numbers));
    break;
  default:
    console.log(`Invalid operation: ${operation}`);
}