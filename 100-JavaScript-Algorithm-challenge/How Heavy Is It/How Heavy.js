function massofvolume(r, h) {
  const volume = Math.PI * Math.pow(r, 2) * h * 0.001;
  const mass = volume.toFixed(2);
  return mass;
}
let result = massofvolume(30, 60);
console.log(result);
