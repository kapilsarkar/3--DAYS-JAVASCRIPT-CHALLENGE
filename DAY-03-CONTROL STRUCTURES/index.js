//DAY -03 - CONTROL STRUCTURES :

//Activity-1 : If-Else Statements :

//Task-1 : Write a program to check if a number is positive, negative, or zero, and log the result to the console.

let numCheck1 = 20

 if(numCheck1 > 0){
    console.log(numCheck1,"Positive Number")
 }
 else if(numCheck1 < 0){
    console.log(numCheck1,"Negative Number")
 }
 else{
    console.log(numCheck1,"Zero")
 }

 //Task-2 : Write a Program to check if a person is eligible to vote (age >= 18) and log the result to the console.

 let personAge = 18

 if(personAge>=18){
     console.log(personAge,"Person is eligible for Vote")
 }
 else{
    console.log(personAge,"Person is not eligible for Vote")
 }

 //Activity-2 : Nested If-Else Statements :

 //Task-3 :  Write a program to find the largest of three numbers using nested if-else statements.

 let num1 = 20
 let num2 = 30
 let num3 = 60

 if(num1>num2){
    console.log(num1,"Is the Largest Number")
 }
 else if(num1>num3){
    console.log(num2,"Is the Largest Number")
 }
 else {
    console.log(num3,"Is the Largest Number")
 }

 //Task-4 : Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.