let millionsRounding = [
  ["Nice", 942208],
  ["Abu Dhabi", 1482816],
  ["Naples", 2186853],
  ["Vatican City", 572],
];
let len = millionsRounding.length;
for (i = 0; i < len; i++) {
  let x = millionsRounding[i];
  let y = x[1];
  let round = Math.round(y / 1000000) * 1000000;
  console.log(round);
}
