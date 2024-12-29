//in this we will learn the use of spread operator in JS

const array1= ["reading", "Writing"]
const array2=["singing"]
const mergedArray=[...array1, ...array2]
console.log(mergedArray)

//an alternative to using spread operator in case of arrays can be to use the concat operator
const mergedArray2=array1.concat(array2)
console.log(mergedArray2)

//spread operator in case of objects
const user = {
    name: "adnina",
    age:91,
    city:"washington dc"
}

const extendedUser= {
    ...user,
    isAdmin: false
}
console.log(extendedUser)