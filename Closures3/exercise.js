

function multiplyByTwo(value) {
  let number = 2;
  function inner(){
    console.log(value * number)
  };
  return inner;
};

console.log(multiplyByTwo(4)());

//la consola me imprime un "undefined" que no se a que se debe
