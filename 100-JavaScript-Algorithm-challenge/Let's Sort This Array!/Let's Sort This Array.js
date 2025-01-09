function sorting(Arr, ordering) {
  if (ordering === "Asd") {
    return Arr.sort();
  } else if (ordering === "Dce") {
    return Arr.sort().reverse();
  } else {
    return Arr;
  }
}
let x = sorting(["jjd", "one", "air", "bell"], "Asd");
let y = sorting(["jjd", "one", "air", "bell"], "Dce");
let z = sorting(["jjd", "one", "air", "bell"], "");
console.log(x);
console.log(y);
console.log(z);
