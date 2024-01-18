
let fname = "John";
let lname = 'wick'
let age = 29
let hobbie = ['video games', 'hiking', 'running']

console.log(`my name is ${fname} and my age is ${age}`)

const myBio = (fname, lname, ...otherinfo) =>{
    return otherinfo;
};

console.log(myBio(fname, lname, age, hobbie));

const spread = (fname, lname, age, ...hobbies) => { 
    return hobbie
 };

 console.log(spread(fname, lname, age, hobbie));