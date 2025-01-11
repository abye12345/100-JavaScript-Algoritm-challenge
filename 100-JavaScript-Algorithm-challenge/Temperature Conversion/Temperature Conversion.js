function convertTemprature(C) {
  let F = (C * 9) / 5 + 32;
  let K = C + 273.15;
  let Arr = [];
  Arr.push(F, K);
  return Arr;
}
let result = convertTemprature(100);
console.log(result);
