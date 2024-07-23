//Activity-1 : Object Creation and Access
//Task-1 : Create an object representing a book with properties like title, author, and year, and log the object to the console.

const book = {
  title: "Harry Potter",
  author: "JK Rowling",
  year: "2003",
};

console.log(book);

//Task-2 :  Access and log the title and author properties of the book object.

console.log(`Title of the Book:${book.title}`);
console.log(`Author of the Book:${book.author}`);

//Activity-2 : Object Methods

//Task-3 : Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method. 

book.getDetails = ()=>{
    return `Book Title  : ${this.title} Book Author : ${this.author} `
}

console.log(book.getDetails())

//Task-4 : Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

