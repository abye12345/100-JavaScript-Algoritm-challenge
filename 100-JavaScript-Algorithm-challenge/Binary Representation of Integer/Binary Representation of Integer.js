function count(num) {
  let binarynumber = num.toString(2);
  let len = binarynumber.length;
  let counts = 0;
  for (i = 0; i < len; i++) {
    if (binarynumber[i] == "1") {
      counts++;
    }
  }
  return counts;
}
let result = count(7);
console.log(result);
