let rlSync = require('readline-sync');

function greeting() {
  let name = rlSync.question("What's your name?\n");
  console.log(`Good Morning, ${name}!`)
};

greeting();

function maskingInput() {
  let yourWord = rlSync.question("Tell me your word: ", {
    hideEchoBack: true
  })
  console.log(`You just told me this: ${yourWord}`);
}

maskingInput()
