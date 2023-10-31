let person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

let person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".

function changeValue(obj, key, val){
  let person = Object.assign({}, obj);
  person2[key] = val;
  return person;
}

person1 = changeValue(person2, "firstName", "Simon");   

console.log(person1);
console.log(person2);
