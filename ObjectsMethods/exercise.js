const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

//Lo que se me ocurrio:

for (const key in person){
  console.log(key +": " + person[key])
};

// La sugerencia: Print values of person using Object.keys

let keys = Object.keys(person)

for (let i = 0; i < 3; i++){
  console.log(keys[i] +": " + person[keys[i]])
};

