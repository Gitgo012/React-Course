const num=number =>{
    if (number ===2)
        return 5
    else {return 6}
}

console.log(num())
//arrow functions can either be named or anonymous
//example of named arrow function
const emailchecker = (username, email) => {
    return `Hello, ${username}, is this your ${email}?`
}

console.log(emailchecker("yash", "abcd@gmail.com"))

//example of anonymous arrow function
const numbers=[1.2,2.3,5.6,6,8]
const doubled= numbers.map(num=>{return num**2})
console.log(doubled)

//arrow functions syntax rules- 
//If we have just 1 parameter then we can ignore the () but for more than 1 params, we need the (). We also need it in situations where we have 0 params.

//If we are returning just 1 logic then we can skip the {} and the return statement. 
//NOTE THAT BOTH NEED TO BE OMITTED IF WE ARE CHOOSING TO DO SO

//the code below is a named arrow function which is returning an object by taking a number as a param and then setting the age=number taken as param
const getAge = number => ({ age: number });
console.log(getAge(25))