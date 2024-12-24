function Array(num, len) {
  let arr = [];
  for (i = 1; i <= len; i++) {
    arr.push(num * i);
  }
  console.log(arr);
}
Array(7, 4);
