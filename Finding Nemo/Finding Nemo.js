function findNemo(para) {
  const sentence = para.match(/\bNemo\b/);
  const word = para.split(" ");
  if (sentence) {
    const wordindex = word.indexOf("Nemo");
    return wordindex + 1;
  }
  return `Nemo is not found here`;
}
const nam = "I am Nemo person";
const result = findNemo(nam);
console.log(result);
