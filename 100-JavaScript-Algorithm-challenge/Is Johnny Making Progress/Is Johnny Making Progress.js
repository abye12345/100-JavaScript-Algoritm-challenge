function progrees(arr) {
  let len = arr.length;
  let result = 0;
  for (i = 0; i < len - 1; i++) {
    let a = arr[i + 1];
    let b = arr[i];
    let c = a - b;
    if (a - b >= 1) {
      result += 1;
    }
  }
  return result;
}
let x = progrees([6, 5, 4, 3, 2, 9]);
console.log(x);
