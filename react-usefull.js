//smarter if else
let age = 17;
let name = age > 18 ? "Adult" : "Not an adult";
console.log(name);

//defining an object in js
const person = {
  name: "My Name",
  age: 18,
  isMarried: false,
};


//copying all the daa of this object but not the name
const person2 = {...person, name: "Another Name"};
//using the defined names
console.log(person)
console.log(person2)

//we can use the same thing for arrays
const arr1 = ["Name1", "Name2", "Name3"];
const arr2 = [...arr1, "Name4", "Name5"];
console.log(arr1)

console.log(arr2)
