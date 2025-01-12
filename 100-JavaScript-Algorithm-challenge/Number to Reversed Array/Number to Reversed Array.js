function reverseArr(num) {
  let a = num.toString();
  let x = a.split("").reverse();
  return x.map(Number);
}
let result = reverseArr(633637);
console.log(result);
