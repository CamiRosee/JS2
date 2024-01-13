const isLogged = true;


function promise1(isLogged){
return new Promise((resolve, reject) => {
    let num = Math.random();
    if (isLogged === true){
        resolve(num)
    } else {
        reject(new Error("El usuario no inició sesión. Intente nuevamente."));
    }
});
};

function promise2(num){
return new Promise((resolve, reject) => {
    if (num > 0.5){
        resolve(console.log(`{name: "John", age: 24}`))    // hay otra forma de que se imprima? como en la clase, no me sale
    } else {
        reject(new Error(`errorrrr`))
    }
});
};


promise1(isLogged)
.then((num) => promise2(num))    //si o si tengo que escribirlo asi para obtener el valor?
    


