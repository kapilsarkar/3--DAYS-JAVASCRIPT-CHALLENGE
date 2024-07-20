//Activity-1: Arithmetic Operators


//Task-1 : Write a program to add two numbers and log the result to the console.
let addNum1 = 10
let addNum2 = 20
let addResult = addNum1 + addNum2
console.log("Result of Addition is :", addResult)

//Task-2 : Write a program to subtract two numbers and log the result to the console.
let subNum1 = 20
let subNum2 = 10
let subResult = subNum1 - subNum2
console.log("Result of Subtraction is :", subResult)

//Task-3 : Write a program to multiply two numbers and log the result to the console.
let mulNum1 = 30
let mulNum2 = 20
let mulResult = mulNum1 * mulNum2
console.log("Result of Multiplication is :", mulResult)

//Task-4 : Write a program to divide two numbers and log the result to the console.
let divNum1 = 50
let divNum2 = 10
console.log("Result of Division L :",divNum1 / divNum2)

//Task-5 : Write a program to find the remainder when one number is divided by another  and log the result to the console.

let divRemNum1 = 54
let divRemNum2 = 9
let divRemResult = divRemNum1 % divRemNum2
console.log("Result of  Division of and Remainder is ",divRemResult)

//Activity-2 : Assignment Operators

//Task-6 : Use the += operator to add a number to a variable and log the result to the console.

let assignNum1 = 50
assignNum1 += 20
console.log("Result of addition using += operator :",assignNum1)

//Task-7 : Use the -= operator to subtract a number from a variable and log the result to the console.

let assignNum2 = 20
assignNum2-= 5
console.log("Result of subtraction using -= opertor:",assignNum2)

//Activity-3 : Comparison Operators

//Task-8 : Write a Program to compare two numbers using  > and < and log the result to the console.

let comNum1 = 50
let comNum2 = 60

let comGreater = comNum1 > comNum2
let comLess = comNum1 < comNum2 
console.log("Result of > is :" , comGreater)
console.log("Result of < is :", comLess)

//Task-9 : Write a program to compare two numbers using `>=` and `<=` log the result to the console.

let comNum3 = 100
let comNum4 = 200

console.log("Result of Greater than Equal To :", comNum3 >= comNum4)
console.log("Result of Less than Equal To :", comNum3 <= comNum4)

//Task-10 :  Write a program to compare two numbers using `==` and `===` log the result to the console.

let comNum5 = 500
let comNum6 = 600
console.log("Result of == is :", comNum5 == comNum6)
console.log("Result of === is :", comNum5 === comNum6)

//Activity-4 : Logical Operators

//Task - 11 :  Write a program that uses the `&&` operator to combine two conditions and log the result to the console.

let logNum1 = 100
let logNum2 = 300
let logNum3 = 600

let logResult = logNum1 > logNum2 && logNum3 > logNum2 && logNum1 > logNum3
console.log("Result of && operator is:", logResult)

//Task - 12 : Write a program that uses the || operator to combine two conditions and log the result to the console.

let logNum4 = 1000
let logNum5 = 3000
let logNum6 = 5000

let logResult2 = logNum4 > logNum5 || logNum5 > logNum6 || logNum6 > logNum4
console.log("Result of || opeartor is :",logResult2)

//Task - 13 : Write a program that uses the ! operator to negate condition and log the result to the console.

let negNum1 = 50
let negNum2 = 30
let negResult = negNum1 > negNum2
console.log("The Result is:", !negResult)

//Activity-4 : Ternary Operator

//Task-14 : Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

let terNum= -30
let terNumResult = terNum>=0 ? "Positive" : "Negative"
console.log("The Result is :",terNumResult)

//Feature Request :

//1.Arithmetic Operations Script : Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.

let arnNum1 = 50
let arnNum2 = 10

let addition = arnNum1 + arnNum2
let subtraction = arnNum1 - arnNum2
let multiplication = arnNum1 * arnNum2
let division = arnNum1 /arnNum2
let remainder = arnNum1 % arnNum2

console.log("Result of Addition is:", addition)
console.log("Result of Subtraction is :",subtraction)
console.log("Result of Multiplication is :",multiplication)
console.log("Result of Division is :",division)
console.log("Result of remainder is:",remainder)

//2.Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.


let valNum1 = 20
let valNum2 = 30

//Comparison Operators.

let greaterThan = valNum1 > valNum2
let lessThan = valNum1 < valNum2
let greaterThanEqualTo = valNum1 >= valNum2
let lessThanEqualTo = valNum1 <= valNum2
let equalTo = valNum1 == valNum2
let strictEqualTo = valNum1 === valNum2

console.log("Result of Greater than is :", greaterThan)
console.log("Rersult of Less than is:", lessThan)
console.log("REsult of Greater Than Equal To :",greaterThanEqualTo)
console.log("Result of Less than Equal To : ",lessThanEqualTo)
console.log("Result of Eual to",equalTo)
console.log("Result of Strict Equal To ", strictEqualTo)

//Logical Operators :

let logCondition1 = valNum1 > valNum2 && valNum1 < valNum2
let logCondition2 = valNum1 > valNum2 || valNum1 < valNum2
console.log("Result of Logical Operator && is :", logCondition1)
console.log("Result of Logical Operator || is :",logCondition2)

//3. Ternary Operator Script : Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.

let terVal1 = 50
let terVal2 = 60

let terValResult = terVal1>=0? "Positive" : "Negative"
console.log("Result of Ternary Operator is:",terValResult)
