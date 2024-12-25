function calculator(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    let sum = a + b;
    let div = a / b;
    let dic = div.toFixed(2);
    let diff = a - b;
    let mult = a * b;
    console.log(
      `sum:${sum}, division: ${dic}, difference: ${diff}, mult: ${mult}`
    );
  }
}
calculator(95, 9);
