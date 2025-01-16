function comapre(a, b, c) {
  let result;
  if (a === b && b === c) {
    result = 3;
  } else if (a === b || a === c || b === c) {
    result = 2;
  } else {
    result = 0;
  }
}
let x = comapre(3, 7, 3);
console.log(x);
