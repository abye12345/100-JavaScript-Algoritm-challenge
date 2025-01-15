function makeTitle(str) {
  let words = str.split(" ");
  let result = "";
  for (i = 0; i < words.length; i++) {
    let x = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    result += x + " ";
  }
  return result;
}
let y = makeTitle("hello people");
console.log(y);
