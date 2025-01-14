function getmissing(arr) {
  for (i = 0; i <= 10; i++) {
    if (!arr.includes(i) && i > 0) {
      console.log(i);
    }
  }
}
getmissing([1, 3, 4, 5, 6, 7, 8, 9]);
