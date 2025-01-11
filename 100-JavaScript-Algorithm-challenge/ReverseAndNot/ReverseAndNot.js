function reverseandNot(i) {
  let a = i.join("");
  let b = i.reverse().join("");
  let c = b.concat(a);
  return c;
}
let intOfArr = [1, 4, 6, 7];
let result = reverseandNot(intOfArr);
console.log(result);
