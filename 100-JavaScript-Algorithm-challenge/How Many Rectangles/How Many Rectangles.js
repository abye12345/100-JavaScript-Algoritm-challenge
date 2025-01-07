function getNumberofrectangle(n) {
  let x = (n * (n + 1)) / 2;
  let y = Math.pow(x, 2);
  return y;
}
let result = getNumberofrectangle(2);
console.log(result);
