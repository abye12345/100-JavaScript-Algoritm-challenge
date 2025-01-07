function Array(arr) {
  arr.sort((a, b) => {
    return a - b;
  });
  console.log(arr[1]);
}

Array([8, 90, 45, 0]);
