//array destructuring
const names = ["nathan", "daniel", "adam", "michael", "rahul"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
console.log("end");

//or
//this is an example of array destructuring
//the names we use for destructuring can be anything. they are just mapped to values of the arrays on the right side of the = sign
const [firstName, secondName, thirdName, fourthName, lastName] = [
  "nathan",
  "daniel",
  "adam",
  "michael",
  "rahul",
];
console.log(firstName);
console.log(secondName);
console.log(thirdName);
console.log(fourthName);
console.log(lastName);
console.log("end");

//object destructuring
const user = {
  name: "adma",
  age: 29,
  city: "agra",
};
console.log(user.name, user.age, user.city);

//example of object destructuring
//in this case the values in the {} needs to be same as the name of the key pairs we are specifying
const { name, age, city } = {
  name: "adma",
  age: 29,
  city: "agra",
};
console.log(name, age, city);

//function destructuring - here order is an object
let order = {
  id: 72,
  currency: 372,
};
function storeOrder(order) {
  console.log("id:", order.id);
  console.log("currency:", order.currency);
}
storeOrder(order);

//example of fnc destructuring - this still takes just 1 parameter only which is a single object in which we are destructuring the key pairs of the object
function storeOrder2({ id, currency }) {
  console.log("id:", id);
  console.log("currency:", currency);
}
storeOrder2(order);
