function isObject(value) {
  if (typeof value === "object" && value !== null) {
    return true;
  }
  return false;
}

console.log(isObject(null)); // false
console.log(isObject({})); // true
console.log(isObject([])); // true
console.log(isObject(42)); // false
console.log(isObject("Hello")); // false
