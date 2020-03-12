// let myArray = {
//   0: "this",
//   1: "that",
//   2: "why!",
//   length: 3
// };

// for (let i = 0; i < myArray.length; i += 1) {
//   console.log(myArray[i]);
// }

// let obj = {
//   b: 2,
//   a: 1,
//   c: 3,
// };

// console.log(Object.keys(obj).map(el => el.toUpperCase()));

// let myProtoObj = {
//   foo: 1,
//   bar: 2,
// };

// const myObj = Object.create(myProtoObj);
// myObj.qux = 3;

function copyObj(obj, arr=Object.keys(obj)) {
  
  const newObj = {};
  arr.forEach(key => newObj[key] = obj[key]);
  return newObj;
}

let objToCopy = {
  foo: 1,
  bar: 2,
};

let newObj = copyObj(objToCopy);
console.log(newObj.foo);    // => 1
console.log(newObj.bar);    // => 2

let newObj2 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj2.foo);   // => 1
console.log(newObj2.bar);   // => undefined

