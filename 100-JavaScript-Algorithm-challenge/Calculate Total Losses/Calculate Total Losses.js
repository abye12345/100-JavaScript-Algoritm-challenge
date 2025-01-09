let lost = {
  tv: 890,
  mobile: 900,
  money: 800,
  gold: 1000,
};
let totallost = 0;
for (let x in lost) {
  let result = lost[x];
  totallost += result;
}
if (totallost == 0) {
  console.log("Luck good!");
} else {
  console.log(totallost);
}
