//Activity-1 : Variable Declaration

//Task-1 : Declare a variable using var, assign it a number and log the value to the console

var number = 20
console.log(number)

//Task-2 : Declare a variable using let, assign it a string and log the value to the console

let myName = 'Kapil Sarkar'
console.log(myName)

//Activity-2 : Constant Declaration

//Task-3 : Declare a variable using const, assign it a boolean value and log the value to the console

const isLogged = true
console.log(isLogged)

//Activity-3 : Data Types 

//Task-4 : Create variables of different data types (number,string boolean,object,array) and log each variable's  type using the typeof operator.

const aNumber = 32
console.log(typeof aNumber)

const myStar = "John Cena"
console.log(typeof myStar)

const isMember = true
console.log(typeof isMember)

const myDetails ={
    myname : "Kapil",
    role: "Frontend Developer",
}

console.log(typeof myDetails)

const arrayOfStars = ["Hrithik","Kohli","Rohit Sharma"]
console.log(typeof arrayOfStars)


//Activity-4 : Reassigning variables

//Task-5 : Declare a variable using let, assign it an initial value,reassign a new value,and log both values to the console

let myFavCricketer = "Sachin Tendulkar"
console.log(myFavCricketer)

myFavCricketer = "Virat Kohli"
console.log(myFavCricketer)

//Activity-5 : Understanding const

//Task-6 : Try reassigning a variable declared with const and observer the error.

// const myFavActor = "Akshay Kumar"
// console.log(myFavActor)

// myFavActor = "Hritik Roashan"
// console.log(myFavActor)

// ⚠️ Error Observed - TypeError: Assignment to constant variable.

// Feature Request :

//1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the values of each variable to the console.

let stringValue = "My Name is Kapil Sarkar"
console.log(stringValue , "Data Type is :", typeof stringValue)

let numValue = 32
console.log(numValue,"Data Type is :",typeof numValue)

let isPassed = true
console.log(isPassed,"Data Type is :",typeof isPassed)

let Cricketers = ["Sachin","Rohit","Kohli","Bumrah","Zaheer"]
console.log(Cricketers,"Data Tpe is :",typeof Cricketers)

let myDetails2 = {
      name:"Kapil Sarkar",
      role :"front-End Developer",
      education:"MCA"
}
console.log(myDetails2,"Data Type is :",typeof myDetails2)

let value = null
console.log(value,"Data Type is:",typeof value)

let isTrue = undefined
console.log(isTrue,"Data Type is :",typeof isTrue)

// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between `let` and `const` when it comes to reassignment. 

//Reassignment of let variable :
let Winner2007WorldCup = "INDIA"
console.log("Initial Value of let:",Winner2007WorldCup)

Winner2007WorldCup = "AUSTRALIA"
console.log("New Value of let:",Winner2007WorldCup)

//Reassignment of const variable :
const firstValueofConst = "REACT-JS"
console.log(firstValueofConst)

secondValueofConst = "ANGULAR-JS"
console.log(secondValueofConst)











