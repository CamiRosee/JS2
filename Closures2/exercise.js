

function printName (){
    setTimeout(function() {
        let helloName = "Hello John"
        console.log(helloName)
    }, 1000);
}

console.log(printName());

//también me sale un undefined que no se a que se debe