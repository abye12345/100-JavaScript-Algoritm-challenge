function ismatch(arr) {
  let result = "";
  let len = arr.length;
  for (i = 0; i < len - 1; i++) {
    result += arr[i];
  }
  return result === arr[len - 1].toString();
}
let x = ismatch([1, 2, 3, 123]);
console.log(x);
