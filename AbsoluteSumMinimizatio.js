"use strict";
let Array = [1, 2, 3, 4, 5];
let len = Array.length;
let i;
for (i = 0; i < len; i++) {
  let a = Array[i];
  let summin =
    Math.abs(Array[0] - a) +
    Math.abs(Array[1] - a) +
    Math.abs(Array[2] - a) +
    Math.abs(Array[3] - a) +
    Math.abs(Array[4] - a);
  console.log(summin);
}
