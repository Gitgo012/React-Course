//arrays are kinds of objects
//objects help us to assign values in the form of key value pairs whereas arrays allow us to assign the values in a particular order in which they can be accessed using their index.

const hobbies = ["reading", "writing", ["hitting the gym"]]
console.log(hobbies[2][0])
console.log(hobbies[1])

//pushing values into hobbies array
hobbies[2].push("singing")
console.log(hobbies[2][1])
console.log(hobbies)

//find-index 
const index= hobbies.findIndex((item) => {
    return item === "reading"

});

//or
const index2= hobbies.findIndex((item) => item === "reading");
console.log(index)

//map function - it does not edit the og array rather it creates a new array therefore we are creating a constant called editedhobbies to store the edited hobbies after being mapped.
const editedhobbies=hobbies.map((item) =>{return item + "!"});
console.log(editedhobbies)

//for creating JS objects using MAP fnc
const editedhobbies2=hobbies.map((item) =>{return ({hobbies: item})});
console.log(editedhobbies2)
