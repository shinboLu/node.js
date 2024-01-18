const person = {
  fname: "John",
  lname: "wick",
  greet() {
    console.log(this.fname, this.lname);
  },
};

const printName = ({ fname, lname, greet }) => {
  console.log(fname,lname, greet());
};

printName(person);
