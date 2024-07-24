//Activity-1 : Template Literals

//Task-1 : Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

let TheName = "John Cena";
let age = 43;
console.log(`Name is : ${TheName} and age is : ${age}`);

//Task-2 : Create a multi-line string using the template literals and log it to the console.

const multiString = `Hello Welcome to India our Capital is
 Delhi and  Honorable 
 PM  is Mr Narendra Modi `;

console.log(multiString);

//Activity-2 : Destructuring

//Task-3 : Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

const arrayOfStars = ["Hrithik", "Sachin", "Virat", "Rohit", "Bumrah", "SRK"];
const { 0: val1, 1: val2 } = arrayOfStars;
console.log(val1, val2);

//Task-4 :  Use Object destructuring to extract the title and author from a book object and log them to the console.

const book = {
  title: "Harry Potter",
  author: "JK Rowling",
};

const { title: BookTitle, author: BookAuthor } = book;
console.log(BookTitle, BookAuthor);

//Activity-3 : Spread and Rest Operators

//Task-5 : Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

const num1 = [1,2,3,4,5]
const num2 = [6,7,8,9,10]

const joinedArray = [...num1,...num2]
console.log(joinedArray)

//Task-6 : Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.


