//function sum(num1, num2, num3, num4, num5) {
//    return num1 + num2 + num3 + num4 + num5;
//}

//console.log(sum(1, 2, 3, 4, 5));

function suma(...numeros) {
  let resultado = 0;

  for (let numero of numeros) {
    resultado += numero;
  }

  return resultado;
}

console.log(suma(1, 2, 3, 4, 5));

console.log(suma(5, 5, 5, 5, 5, 5, 5));
