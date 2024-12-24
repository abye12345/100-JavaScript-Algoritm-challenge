function Array() {
  let arr = [true, false, true, true, false];
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      count++;
    }
  }
  console.log(count);
}
Array();
console.log("hello");
