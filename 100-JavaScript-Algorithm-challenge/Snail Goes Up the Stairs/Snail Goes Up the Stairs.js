function snailDistance(towerHeight, stepHeight, stepLength) {
  const numberOfSteps = Math.ceil(towerHeight / stepHeight);

  const totalDistance = numberOfSteps * (stepHeight + stepLength);

  return totalDistance.toFixed(1);
}

let distance = snailDistance(10, 0.5, 1);
console.log(distance);
