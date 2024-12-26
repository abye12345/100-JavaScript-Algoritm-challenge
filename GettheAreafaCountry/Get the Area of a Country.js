function Areaproportion(nam, area) {
  const totallandmass = 148940000;
  const proportion = (area / totallandmass) * 100;
  const y = proportion.toFixed(2);
  console.log(`${nam} is ${y}% of the total world's landmass"`);
}
Areaproportion("ethiopia", 1.112 * Math.pow(10, 6));
Areaproportion("Russia", 17.1 * Math.pow(10, 6));
