function getBox(num) {
  if (num % 2 === 0 || 0) {
    return num;
  }
  return num + 2;
}
let result = getBox(6);
console.log(result);
