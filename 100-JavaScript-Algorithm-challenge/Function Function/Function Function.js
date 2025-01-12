function Arrdivide(num) {
  return function (arr) {
    return arr.map((a) => a / num);
  };
}
let divide = Arrdivide(3);
let x = divide([3, 12, 24]);
console.log(x);
