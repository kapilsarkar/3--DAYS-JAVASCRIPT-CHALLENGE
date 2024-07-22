//Activity-1:For Loop:

//Task-1 : Write a program to print numbers from 1 to 10 using a for loop.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//Task-2 : Write a program to print the multiplication table of 5 using a for loop.

for (let i = 1; i <= 10; i++) {
  console.log(i * 5);
}

//Activity-2: While Loop

//Task-3 :  Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

let sum = 0;

let i = 1;

while (i <= 10) {
  sum += i;
  i++;
}
console.log("Sum Of The Numbers from 1 to 10 is:", sum);

//Task-4 : Write a program to print numbers from 10 to 1 using a while loop.

let j = 10;
while (j >= 1) {
  console.log("Result of the Numbers from 10 to 1 :", j);
  j--;
}

//Activity-3 : Do...While Loop
//Task-5 : Write a program to print numbers from 1 to 5 using a do...while loop.

let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);

//Task-6 : Write a program to calculate the factorial of a number using a do...while loop.

let factNum = 5;
let fact = 1;

let factNamResult = factNum;
do {
  fact *= factNamResult;
  factNamResult--;
} while (factNamResult > 0);

console.log(`Factorial of ${factNum} is : ${fact} `);

//Activity-4 : Nested Loops

//Task-7 : Write a program to print a pattern using nested for loops:

for (let i = 1; i <= 6; i++) {
  let pattern = "";
  for (let j = 1; j < i; j++) {
    pattern += "*";
  }
  console.log(pattern);
}

//Activity-5 : Loop Control Structures:

//Task-8: Write a program to print the numbers from 1 to 10  but skip the number 5  using the continue statement.

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }

  console.log(i);
}

//Task-9 : Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}
