function my(array) {
  let len = array.length;
  if (len % 2 != 0) {
    let result = (len + 1) / 2;
    console.log(array[result - 1]);
  } else {
    let x = len / 2 - 1;
    let first = array[x];
    let y = len / 2;
    let second = array[y];
    let result = (first + second) / 2;
    console.log(result);
  }
}
my([1, 2, 4, 6, 9, 8]);
