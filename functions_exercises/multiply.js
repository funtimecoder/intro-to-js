function multiply() {
  const rlSync = require('readline-sync');
  const number1 = Number(rlSync.question("Enter the first number: "));
  const number2 = Number(rlSync.question("Enter the second number: "));
  console.log(`${number1} * ${number2} = ${number1 * number2}`);
}

multiply();