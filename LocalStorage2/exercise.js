const user = {
  id: 1,
  name: "John",
  age: 25,
};


function saveInLocalStorage(objeto){
  let userString = JSON.stringify(objeto);

  localStorage.setItem("user", userString);
};

saveInLocalStorage(user);

function printUserFromLocalStorage(){  

  let recoveredUser = localStorage.getItem("user");
  let objectLike =  JSON.parse(recoveredUser);

  console.log(recoveredUser);
 // console.log(typeof(recoveredUser));    string

  console.log(objectLike);
//  console.log(typeof(objectLike));       objeto
};

printUserFromLocalStorage();