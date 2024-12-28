function isIdentical(arr) {
  for (i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[0]) {
      return false;
    }
  }
  return true;
}
let arr1 = [3, 3, 3, 3, 3, 3];
let arr2 = [4, 5, 5, 5, 5, 5, 5, 5];
let arr3 = ["abye", "abye", "abye"];
console.log(isIdentical(arr1)); //output is true
console.log(isIdentical(arr2)); //output is false
console.log(isIdentical(arr3)); //output is true
