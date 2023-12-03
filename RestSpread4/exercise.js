function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}

const numbers = [1, 2, 3];

console.log(sum(numbers[0], numbers[1], numbers[2]));

console.log(sum(...numbers))  
// funciona, pero solo con 3 numeros, si extiendo el array no sirve

function suma (arr){
  let resultado = 0;
  for (i=0; i < arr.length; i++){
    resultado += arr[i]
  };

  return resultado
};


console.log(suma(numbers));    

//aunque en este caso no estoy usando el spread como pide la consigna 
//porque la funcion ya sirve para cualquier extención