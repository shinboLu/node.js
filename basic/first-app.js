console.log("hello from node.js");
const fs = require("fs");

let name = "max";
let age = 29;
let hasHobbies = true;

// traditional way to create functions
function toString(name, age, hasHobbies) {
  return (
    "Name is " +
    name +
    ", age is " +
    age +
    " and the user has hobbies: " +
    hasHobbies
  );
}

toString(name, age, hasHobbies);
console.log(toString(name, age, hasHobbies));

// like python's lambda function
const const_summarizeUser = (name, age, hasHobbies) =>{
      return (
        "Name is " +
        name +
        ", age is " +
        age +
        " and the user has hobbies: " +
        hasHobbies
      );
}



console.log("arrow function: " + const_summarizeUser(name, age, hasHobbies))