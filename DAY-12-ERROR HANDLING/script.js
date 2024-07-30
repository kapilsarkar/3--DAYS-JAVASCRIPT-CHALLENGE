//Activity 1: Basic Error Handling with Try-Catch

//Task-1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

function throwError() {
  throw new Error("Error");
}

try {
  throwError();
} catch (error) {
  console.error("Error:", error);
}

//Task-2 : Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

function division(a, b) {
  if (b === 0) {
    throw new Error("Error For Division");
  }
  return a / b;
}

try {
  console.log(division(20, 5));
} catch (err) {
  console.log(err);
}

//Activity 2: Finally Block

//Task - 3: Write a script that includes a try-catch block and a finally block, Log messages in the try, catch, and finally blocks to observe the execution flow.

try{
  console.log("We are in the try Block")
}
catch(err){
    console.log(err)
}
finally{
    console.log("We are in the Finally Block")
}
//Activity 3: Custom Error Objects
//Task - 4 : Create a custom error class that extends the built-in Error class, Throw an instance of this custom error in a function and handle it using a try-catch block

