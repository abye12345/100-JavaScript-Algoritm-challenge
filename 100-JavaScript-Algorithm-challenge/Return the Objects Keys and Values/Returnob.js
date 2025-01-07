function objects(ob) {
  return [Object.values(ob), Object.keys(ob)];
}
let objec = {
  1: "Abye",
  2: "Tensae",
};
let x = objects(objec);
console.log(x);
