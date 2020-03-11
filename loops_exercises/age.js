const rlSyc = require('readline-sync');
const age = Number(rlSyc.question("How old are you? "))

function predictAge(age) {
  console.log(`You are ${age} years old.`);
  for (let i=10; i<41; i += 10) {
    console.log(`In ${i} years, you will be ${Number(age) + i} years old.`)
  }
}

predictAge(age);