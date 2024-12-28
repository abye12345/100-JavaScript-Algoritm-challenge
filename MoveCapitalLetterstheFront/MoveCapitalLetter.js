function CapitalFirst(parma) {
  const capitall = parma.match(/[A-Z]/g);
  const small = parma.match(/[a-z]/g);
  return capitall.join("") + small.join("");
}
const word = "anyCOMP";
const result = CapitalFirst(word);
console.log(result);
