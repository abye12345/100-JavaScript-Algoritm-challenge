function traceMatrix(mat) {
  let x = mat[0];
  let y = mat[1];
  let z = mat[2];
  let a1, a2, a3, sumtrace;
  a1 = x[0];
  a2 = y[1];
  a3 = z[2];
  sumtrace = a1 + a2 + a3;
  return sumtrace;
}
let u = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let result = traceMatrix(u);
console.log(result);
