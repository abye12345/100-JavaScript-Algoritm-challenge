function priceOfcloth(price, dicount) {
  return price - (price * dicount) / 100;
}
let prices = priceOfcloth(2777, 13);
console.log(prices.toFixed(2));
