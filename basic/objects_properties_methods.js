// {} is a dictionary

const person = {
  name: "john",
  age: 30,
  // arrow function won't work, because it refers to the global runtime instead of the name within the person object
  greet_not_working: (name) => {
    console.log("Hi, my name is " + name);
  },

  // so we should use the traditional way to declare a function within objects

  greet_working_1: function(name){
    console.log('hi my name is ' + name)
  },
  greet_working_2(){
    console.log("hi my name is " + this.name)
  }
};

person.greet_working_1(person.name);
