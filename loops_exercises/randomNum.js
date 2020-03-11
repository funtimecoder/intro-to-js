function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;

while (true) {
  result = randomNumberBetween(1, 6);
  tries += 1;
  if (result > 2) break;
}

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');