async function recoverTodos(){
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos");
    const respJson = await respuesta.json();

    console.log(respJson);

    respJson.forEach(element => {console.log(
        `Tarea:  ${element.title}
Completa: ${element.completed}`)});


};

recoverTodos();