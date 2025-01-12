function check(str) {
  let tolowerstr = str.toLowerCase();
  let countX = (tolowerstr.match(/o/g) || []).length;
  let countO = (tolowerstr.match(/x/g) || []).length;
  return countX === countO;
}
let result = check("gsgssxxjjiww ooddndkdk a");
console.log(result);
