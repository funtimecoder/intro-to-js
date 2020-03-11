function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}

const one = times(1, 1);
const two = times(2, one);
const three = times(3, two);
const four = times(4, three);
const five = times(5, four);
