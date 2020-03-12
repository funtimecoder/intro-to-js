// function removeNonInteger(array) {
//   return array.filter(el => Number.isInteger(el));
// }

// let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
// let newArray = removeNonInteger(array);
// console.log(newArray); // => [1, 3, -4]

// function oddLengths(arr) {
//   return arr.map(el => el.length).filter(el => el%2 !== 0)
// }

// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr)); // => [1, 5, 3]

// function sumOfSquares(numbers){
//   return numbers.reduce((accu, curr) => accu + curr*curr , 0)
// }

// let numbers = [3, 5, 7];
// console.log(sumOfSquares(numbers)); // => 83

// function oddLengths(arr) {
//   return arr.reduce((accu, curr) => {
//     let length = curr.length;
//     if (length%2 !== 0) {
//       accu.push(length);
//       return accu; 
//     } else return accu;
//   }, [])
// }

// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr)); // => [1, 5, 3]

// function checkIfThree(arr) {
//   console.log(arr.includes(3));
// }

// let numbers1 = [1, 3, 5, 7, 9, 11];
// let numbers2 = [];
// let numbers3 = [2, 4, 6, 8];

// checkIfThree(numbers1);
// checkIfThree(numbers2);
// checkIfThree(numbers3);

let arr = [["test", "hello", "world"], ["example", 6, "mem", null], [4, 8, 12]];

console.log(arr[1][2]);
