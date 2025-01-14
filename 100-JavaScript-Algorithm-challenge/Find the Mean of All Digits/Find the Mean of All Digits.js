function sumOfnumber(number) {
  let x = number.toString();
  let len = x.length;
  let sum = 0;
  for (i = 0; i < len; i++) {
    let y = x.charAt(i);
    sum += parseInt(y);
  }
  return sum;
}
let result = sumOfnumber(56336);
console.log(result);
