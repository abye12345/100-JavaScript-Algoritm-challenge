function instant(arr) {
  let Arr = [];
  let len = arr.length;
  for (i = 0; i < len; i++) {
    let x = arr[i];
    let y = x.charAt(x.length - 1);
    if (y != "7") {
      let result = x.concat("7");
      Arr.push(result);
    } else {
      result = x;
      Arr.push(result);
    }
  }
  return Arr;
}
let output = instant(["gssh", "xhdhd", "dudu", "gdhd7"]);
console.log(output);
