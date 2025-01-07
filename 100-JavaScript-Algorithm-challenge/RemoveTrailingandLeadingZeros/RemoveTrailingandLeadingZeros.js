function remove(number) {
  return number.replace(/^0+|0+$/g, "" || 0);
}
let x = remove("87.90");
console.log(x);
