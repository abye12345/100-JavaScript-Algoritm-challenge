function lineSegment(arr) {
  let a = arr[0];
  let b = arr[1];
  let x1, y1, x2, y2, distance;
  x1 = a[0];
  y1 = a[1];
  x2 = b[0];
  y2 = b[1];
  distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2).toFixed(2);
  return distance;
}
let result = lineSegment([
  [2, 6],
  [4, 5],
]);
console.log(result);
