const user = {
  id: 1,
  name: "John",
  age: 25,
};


function saveInLocalStorage(objeto){
  let userString = JSON.stringify(objeto);
  
  localStorage.setItem("user", userString)
};


saveInLocalStorage(user);