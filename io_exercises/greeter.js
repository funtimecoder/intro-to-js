const rlSyc = require('readline-sync');
const firstName = rlSyc.question("What is your first name? ");
const lastName = rlSyc.question("What is your last name? ")
console.log(`Hello, ${firstName} ${lastName}!`);