function reverse(n) {
  if (typeof n !== "number") {
    console.log("please enter the number");
    return;
  }
  let number = Math.abs(n);
  let reversedString = number.toString().split("").reverse().join("");
  return parseInt(reversedString);
}
let b = 5666;
let y = reverse(b);
console.log(y);
