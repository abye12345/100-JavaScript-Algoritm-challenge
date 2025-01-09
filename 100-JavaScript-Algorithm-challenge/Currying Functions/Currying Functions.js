function mul(arr) {
  let Arr = [];
  return function (num) {
    for (i = 0; i < arr.length; i++) {
      let x = arr[i];
      let y = x * 2;
      Arr.push(y);
    }
    return Arr;
  };
}
let first = mul([2, 7, 90, 12]);
let result = first(2);
console.log(result);
