class Person {
  #firstName = "";
  #lastName = "";
  #age = 0;

  constructor(firstName, lastName, age){
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#age = age;
  };

  set firstName(newVal){            //comentar si no quiero que se pueda cambiar el valor, read only!
    this.#firstName = newVal;
  };

  get firstName(){
    return this.#firstName;
  };

  set lastName(newVal){            //idem
    this.#lastName = newVal;
  };

  get lastName(){
    return this.#lastName;
  };

  set age(newVal){
    if (newVal < 1){
      this.#age = 1;
    } else{
      this.#age = newVal;
    }
  };

  get age(){
    return this.#age;
  }

  get fullName(){
    return (this.#firstName + " " + this.#lastName);
  };

}



const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);


person.firstName = 'Maria';     // si no quisiera que cambien los datos, no pongo los setters!
person.lastName = 'Verdi';
console.log(person.fullName);