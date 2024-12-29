//objects are used in JS to group values together
const user = {
    name: "alden",
    age: 20,
    city:"tihar",
    greet(name,city){
        return `hello, ${name} from ${city}`
    }
}
//or
const user2 = {
    name: "daniel",
    age: 22,
    city:"tihar2",
    greet:function greet(name,city){
        console.log(`hello, ${this.name} from ${this.city}`)
    }
}


console.log(user.greet("nathan","colorado"))
user2.greet()

//we can also define a blueprint for an object. This blueprint which is defined is referred to as class

class User {
    constructor(name, age, city){
        this.name=name
        this.age=age
        this.city=city
    }

    greet(){
        return "hi!"
    }
}

//initializing the blueprint
const user3= new User("nandos", 24, "las vegas")
console.log(user3)
console.log(user3.greet())