let funcSum = 0;

function sumUntil(maxValue) {
  for(let i = 0; i <= maxValue; i++){
    funcSum = funcSum + i
  }
  return funcSum;
}

console.log(sumUntil(5));

