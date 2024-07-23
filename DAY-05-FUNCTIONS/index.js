//Activity-1 : Function Declaration

//Task-1 :  Write a function to check if a number is even or odd and log the result to the console.

function oddEvenCheck(num) {
  if (num % 2 === 0) {
    console.log("Even Number");
  } else {
    console.log("Odd Number");
  }
}

oddEvenCheck(5);
oddEvenCheck(20);

//Task-2 :  Write a function to calculate the square of a number and return the result.

//Activity-2 : Function Expression

function square(num) {
  let sqrCheck = num * num;
  console.log(sqrCheck);
}

square(30);

//Task-3 : Write a function expression to find the maximum of two numbers and log the result to the console.

const maxNumCheck = function (n1, n2) {
  if (n1 > n2) {
    console.log(`${n1} is the Greatest Number `);
  } else {
    console.log(`${n2} is the Greatest Number`);
  }
};

maxNumCheck(50, 100);
maxNumCheck(50, 10);

//Task-4 :  Write a function expression to concatenate two strings and return the result.

const joinString = function (str1, str2) {
  const resultString = str1 + str2;
  console.log(resultString);
};

joinString("Hi My Name is :", "Kapil Sarkar");
joinString("Hi My Favorite Sport is:", "Cricket");

//Activity-2 : Arrow Functions

//Task-5 : Write an arrow function to calculate the sum of two numbers and return the result.

const CheckSum = (n1, n2) => {
  const resultSum = n1 + n2;
  console.log(`Sum of Two Numbers is : ${resultSum}`);
};

CheckSum(10, 100);
CheckSum(100, 100);

//Task-6 :  Write an arrow function to check if a string contains a specific character and return a boolean value.

const charCheck = (str, char) => {
  const result = str.includes(char);
  console.log(result);
};

charCheck("JavaScript", "a");
charCheck("HTML", 1);

//Activity-4 : Function Parameters and Default Values

//task-7 : Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

function productCheck(a, b = 5) {
  const result = a * b;
  console.log(result);
}

productCheck(20, 3);
productCheck(60);

//Task-8 : Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

const personGreeting = (name, age = 25) => {
  console.log(`Hi ${name} Welcome your age is ${age}`);
};

personGreeting("Kapil Sarkar");
personGreeting("Virat Kohli", 35);

//Activity-5 : Higher-Order Functions

//Task-9 : Write a higher-order function that takes a function and a number, and calls the function that many times.

function NTimes(fn, times) {
  for (let i = 0; i < times; i++) {
    fn();
  }
}

function msg() {
  console.log("Hello Happy Java Script Learning");
}
NTimes(msg, 3);

//Task-10 : Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function twoValues(fn1, fn2) {
  return function (value) {
    return fn2(fn1(value));
  };
}

function mul1(n1) {
  return n1 * 5;
}

function mul2(n2) {
  return n2 * 10;
}

const resultTwoValues = twoValues(mul1, mul2);

console.log(resultTwoValues(10));
console.log(resultTwoValues(20));
