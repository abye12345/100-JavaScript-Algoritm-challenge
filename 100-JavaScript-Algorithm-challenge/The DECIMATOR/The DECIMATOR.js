function Decimator(str) {
  let len = str.length;
  let a = len / 10;
  let roundd = Math.ceil(a);
  let result = "";
  for (i = 0; i < len - roundd; i++) {
    result += str[i];
  }
  return result;
}
let result = Decimator("53637389");
console.log(result);
