const rlSync = require('readline-sync')

function allCaps(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}

const string = rlSync.question("Give me some words: ");
console.log(allCaps(string));

function numberRange(num) {
  const numNum = Number(num);
  if (numNum < 0) {
    console.log(`${numNum} is less than 0`);
  } else if (numNum >=0 && numNum <= 50) {
    console.log(`${numNum} is between 0 and 50`);
  } else if (numNum > 50 && numNum <= 100) {
    console.log(`${numNum} is between 50 and 100`)
  } else {
    console.log(`${numNum} is greater than 100`)
  }
}

const num = rlSync.question("Give me a number: ");
numberRange(num);