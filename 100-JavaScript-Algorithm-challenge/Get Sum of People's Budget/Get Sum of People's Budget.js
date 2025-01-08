function getbudget(money) {
  let sum = 0;
  let len = money.length;
  for (i = 0; i < len; i++) {
    let a = money[i];
    let b = a.budget;
    sum += b;
  }
  return sum;
}
x = [
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve", age: 32, budget: 40000 },
  { name: "Martin", age: 16, budget: 2700 },
];
let y = getbudget(x);
console.log(y);
