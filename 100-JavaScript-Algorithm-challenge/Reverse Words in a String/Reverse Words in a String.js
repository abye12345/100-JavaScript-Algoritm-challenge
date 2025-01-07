function reversed(str) {
  let strings = str;
  let word = strings.trim().split(" ");
  let reversedword = word.reverse();
  return reversedword;
}
let result = reversed("hello world person!");
console.log(...result);
