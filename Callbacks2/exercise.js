
function repeatHello(callback){
    setInterval(callback, 1000);
};

repeatHello(() => console.log("Hello"));    //funciona igual aunque no sea una arrow function. por qué debería serlo?


