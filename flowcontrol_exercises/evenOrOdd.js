function evenOrOdd(num) {
  if (Number(num) !== Math.floor(Number(num))) return "Error: Not an integer";
  if (Number(num) % 2 === 1) {
    return 'odd'
  } else {
    return 'even'
  }
};

const rlSync = require('readline-sync');
const num = rlSync.question("Say a number: ");
console.log(evenOrOdd(num));