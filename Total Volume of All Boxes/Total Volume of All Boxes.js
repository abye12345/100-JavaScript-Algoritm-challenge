function Volume(setofarry) {
  let totalvolume = 0;
  for (x of setofarry) {
    const [length, width, height] = x;
    let volumee = length * width * height;
    totalvolume += volumee;
  }
  return totalvolume;
}
let array = [
  [2, 3, 4],
  [3, 9, 5],
];
let result = Volume(array);
console.log(result);
