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

book.getDetails =function ()  {
  return `Book Title  : ${this.title} Book Author : ${this.author} `;
};

console.log(book.getDetails());

//Task-4 : Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

const newBook = {
  title: "Harry Potter in 2024",
  author: "JK ROWLING",
  year: 2022,
  updateYear: function (newYear) {
    this.year = newYear;
    console.log(this);
  },
};

newBook.updateYear(2024);

//Activity-3 : Nested-Objects

//Task-5 :  Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

const library = {
  name: "Programming Books",
  books: [
    {
      title: "Javascript",
      author: "Akshay Saini",
      year: 2024,
    },
    {
      title: "Python",
      author: "Hitesh Chowdhury",
      year: 2024,
    },
  ],
};
console.log(library);

//Task-6 : Access and log the name of the library and the titles of all the books in the library.

const libraryName = library.name;
console.log(`Name of the Library: ${libraryName}`);
const bookTitle = library.books.map((e) => {
  return e.title;
});
console.log(`Title of the Books: ${bookTitle}`);

//Activity-4 : The `this` keyword

//Task-7 : Add a method to the book object that uses the `this` keyword to return a string with the book's title and year, and log the result of calling this method.

book.getTitleAndAuthor = function() {
  return `${this.title} and ${this.year} `;
};

console.log(book.getTitleAndAuthor());

//Activity-5 : Object Iterartion

//Task-8 :  Use a `for...in` loop to iterate over the properties of the book object and log each property and its value.

for(const property in book){
  console.log(`${property}: ${book[property]}`)
}

//Task-9 : Use `Object.keys` and `Object.values` methods to log all the keys and values of the book object.

console.log("Keys:",Object.keys(book));
console.log("Values:",Object.values(book));

