function getName(name) {
  const rlSync = require("readline-sync");
  return rlSync.question(name);
}

const firstName = getName("What is your first name? ");
const lastName = getName("What is your last name? ");

console.log(`Hello, ${firstName} ${lastName}!`);