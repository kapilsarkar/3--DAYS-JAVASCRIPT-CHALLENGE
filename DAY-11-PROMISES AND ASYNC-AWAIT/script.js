//Activity-1 : Understanding Promises

//Task-1 : Create a promise that resolves with a message after a 2 second timeout and log the message to the console

let promises = new Promise(function (resolve, reject) {
  let goodDeveloper = true;
  if (goodDeveloper) {
    setTimeout(() => {
      resolve("Promise Resolved By a Good Developer");
    }, 2000);
  } else {
    reject("Promise not resolved");
  }
});

promises
  .then((res) => {
    console.log(res);
  })
  .catch(console.error());

//Task-2 : Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch()

let promise2 = new Promise((resolve, reject) => {
  let isStudent = false;
  if (isStudent) {
    setTimeout(() => {
      resolve("Promise Resolved");
    }, 2000);
  } else {
    reject("Promise Rejected");
  }
});

promise2
  .then((res) => {
    console.log(res);
  })
  .catch(console.error());

//Activity-2 : Chaining Promises

//Task-3 : Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

const fetchData = (data, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Fetched ${data}`);
      resolve(data);
    }, delay);
  });
};

fetchData("Day 1", 2000)
  .then(() => fetchData("Day 2", 2000))
  .then(() => fetchData("Day 3", 2000));

//Activity-3 : Using Async/Await

//Task-4 : Write an async function that waits for a promise to resolve and then logs the resolved value

function asyncFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task-4 Function Resolved");
    }, 3000);
  });
}

async function asyCall() {
  console.log("Calling");
  const result = await asyncFunction();
  console.log(result);
}

asyCall();

//Task-5 : Write an async function that handles a rejected promise using try-catch and logs the error message.

const task5AsynFunction = async () => {
  const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Task 5 Rejected");
    }, 3000);
  });
  try {
    await promise5;
  } catch (err) {
    console.log(err);
  }
};

task5AsynFunction();

//Activity-4 : Fetching Data from an API

//Task-6 : Use the `fetch` API to get data from an public API and log the response data to the console using promises

let url = "https://fakestoreapi.com/products";

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error("Error:", err));

//Task-7 : Use the `fetch` API to get data from an public API and log the response data to the console using async/await

let api_url = "https://api.github.com/users/kapilsarkar";
async function task7() {
  try {
    const data = await fetch(api_url);

    const jsonValue = await data.json();

    console.log(jsonValue);
  } catch (err) {
    console.log(err);
  }
}

task7();

//Activity-5 : Cun current Promises

//Task-8 : Use the `promise.all` to wait for multiple promises to resolve and then log all their values.

const promiseOne = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 1 resolved"), 1000);
});

const promiseTwo = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 2 resolved"), 2000);
});

const promiseThree = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 3 resolved"), 3000);
});

Promise.all([promiseOne, promiseTwo, promiseThree]).then((values) => {
  console.log(values);
});

//Task-9 : Use `Promise.race` to log the value of the first promise that resolves among multiple promises

const promiseFour = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 4 resolved"), 1000);
});

const promiseFive = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 5 resolved"), 2000);
});

const promiseSix = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 6 resolved"), 3000);
});

Promise.race([promiseFour,promiseFive,promiseSix]).then((values)=>{
  console.log(values)
})

