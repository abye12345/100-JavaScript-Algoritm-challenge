function factorchain(num) {
  let len = num.length;
  for (let i = 0; i < len - 1; i++) {
    let a = num[i + 1];
    let b = num[i];
    if (a % b !== 0) {
      return false;
    }
  }
  return true;
}
let x = factorchain([2, 4, 8, 16, 32]);
console.log(x);
