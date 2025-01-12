function uniqueSort(arr) {
  let len = arr.length;
  let Arr = [];

  for (i = 0; i < len; i++) {
    let a = arr[i];
    if (!Arr.includes(a)) {
      Arr.push(a);
    }
  }
  Arr.sort(function (a, b) {
    return a - b;
  });
  return Arr;
}
let result = uniqueSort([3, 8, 9, 3, 2, 1, 1, 90]);
console.log(result);
