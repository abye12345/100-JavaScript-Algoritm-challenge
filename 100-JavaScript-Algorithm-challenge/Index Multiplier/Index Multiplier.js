function Indexmultiplier(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    let x = arr[i] * i;
    sum += x;
  }
  return sum;
}
let Arrayy = [1, 2, 3, 4, 5];
let result = Indexmultiplier(Arrayy);
console.log(result);
