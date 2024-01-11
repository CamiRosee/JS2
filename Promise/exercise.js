const number = 5;

let promise = new Promise(function(resolve, reject){

if (number > 10){
   resolve(number)
}else{
    reject(new Error("Inválido. El número no es mayor a 10."))
};

})

console.log(promise)

promise.then(
    (number) => console.log(number + " es mayor a 10"),
    () => console.log("El número es inválido")
);


promise.catch(
    () => console.log("Otra vez, número inválido")
)
