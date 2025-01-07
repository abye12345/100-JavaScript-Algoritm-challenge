function thickness(n) {
  let initail = 0.005;
  let current = (initail * Math.pow(2, n)).toFixed(2);
  return current;
}
let result = thickness(10);
console.log(result);
