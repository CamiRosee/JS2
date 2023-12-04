class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  static fromObject(object){
    return new Person(object.firstName, object.lastName)
  }
}

// Define a static method called fromObject inside the Person class 
//which takes in an object literal as parameter and instantiate a 
//Person object.

const obj = {
  firstName: "Mario",
  lastName: "Rossi",
};

const person = Person.fromObject(obj);

console.log(person.firstName + " " + person.lastName);
