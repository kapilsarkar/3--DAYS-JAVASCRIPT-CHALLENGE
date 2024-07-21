//DAY -03 - CONTROL STRUCTURES :

//Activity-1 : If-Else Statements :

//Task-1 : Write a program to check if a number is positive, negative, or zero, and log the result to the console.

let numCheck1 = 20;

if (numCheck1 > 0) {
  console.log(numCheck1, "Positive Number");
} else if (numCheck1 < 0) {
  console.log(numCheck1, "Negative Number");
} else {
  console.log(numCheck1, "Zero");
}

//Task-2 : Write a Program to check if a person is eligible to vote (age >= 18) and log the result to the console.

let personAge = 18;

if (personAge >= 18) {
  console.log(personAge, "Person is eligible for Vote");
} else {
  console.log(personAge, "Person is not eligible for Vote");
}

//Activity-2 : Nested If-Else Statements :

//Task-3 :  Write a program to find the largest of three numbers using nested if-else statements.

let num1 = 20;
let num2 = 30;
let num3 = 60;

if (num1 > num2) {
  console.log(num1, "Is the Largest Number");
} else if (num1 > num3) {
  console.log(num2, "Is the Largest Number");
} else {
  console.log(num3, "Is the Largest Number");
}

//Activity-3 : Switch Case

//Task-4 : Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

let day = 5;

switch (day) {
  case 1:
    dayName = "Sunday";
    break;
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday";
    break;
  case 4:
    dayName = "Wednesday";
    break;
  case 5:
    dayName = "Thursday";
    break;
  case 6:
    dayName = "Friday";
    break;
  case 7:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid";
    break;
}

console.log(dayName);

//Task-5 : Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'f') based on a score and log the grade to the console.

let score = 84;

switch (true) {
  case score >= 90 && score <= 100:
    grade = "A";
    break;

  case score >= 80 && score < 90:
    grade = "B";
    break;

  case score >= 70 && score < 80:
    grade = "C";
    break;
  case score >= 60 && score < 70:
    grade = "D";
    break;

  case score >= 0 && score < 60:
    grade = "F";
    break;
  default:
    grade = "Invalid Score";
    break;
}
console.log(grade);

//Activity - 4 : Conditional(Ternary) Operator

//Task-6 : Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let evenOddCheck = 20

let evenOddCheckResult = evenOddCheck % 2 === 0 ? "Even" : "Odd"

console.log(evenOddCheckResult)

//Activity - 5 : Combining Conditions 

//Task-7 :  Write a program to check if a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year = 2000

let leapYearCheck = year % 4 === 0 && (year%100 !== 0 || year%400 === 0 ) ? "Leap Year" :"Not a Leap Year" 

console.log(leapYearCheck)



