function removeduplicate(arr) {
  let Arr = [];
  for (let x of arr) {
    if (!Arr.includes(x)) {
      Arr.push(x);
    }
  }
  return Arr;
}
let array = [2, 5, 90, 5, 2, 4, 90, "hello", "hello"];
let result = removeduplicate(array);
console.log(result);
