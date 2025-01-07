function special(arr) {
  let len = arr.length;
  for (i = 0; i < len; i++) {
    let num = arr[i];
    if (i % 2 === 0) {
      if (num % 2 !== 0) {
        return false;
      }
    } else {
      if (num % 2) {
        return false;
      }
    }
  }
  return true;
}
let x = special([2, 9, 46, 9]);
console.log(x);
