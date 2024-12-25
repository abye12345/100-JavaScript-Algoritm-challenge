function volume(height, radius) {
  let x = (1 / 3) * Math.PI * Math.pow(radius, 3) * height;
  return x;
}
let y = volume(6, 2);
console.log(y.toFixed(2));
