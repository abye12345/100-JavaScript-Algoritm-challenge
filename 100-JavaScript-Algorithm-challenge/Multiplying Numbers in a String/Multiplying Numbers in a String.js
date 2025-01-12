function multiplyNum(str) {
  let product = 1;
  let x = str.split(",");
  x.forEach((num) => {
    product *= num;
  });
  return product;
}
let result = multiplyNum("1,4,5,2");
console.log(result);
