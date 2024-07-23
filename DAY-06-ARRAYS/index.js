//Activity-1 : Array Creation and Access

//Task-1 : Create an array of numbers from 1 to 5 and log the array to the console.

const arrayOfNum = [1, 2, 3, 4, 5];
console.log(arrayOfNum);

//Task-2 :  Access the first and last elements of the array and log them to the console.

const arrayOfElement = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const firstElement = arrayOfElement[0];

console.log(`First  Element of Array : ${firstElement}`);

const lastElement = arrayOfElement[arrayOfElement.length - 1];

console.log(`Last Element of Array : ${lastElement}`);

//Activity-2 : Array Methods(Basic)

//Task-3 : Use the `push` method to add a new number to the end of the array and log the updated array.

const pushArray = [1, 2, 3, 4, 5];
const newPush = pushArray.push(6);
console.log(`New Array by pushing elements : ${pushArray} `);

//Task-4 : Use the `pop` method to remove the last element from the array and log the updated array.

const popArray = [12, 3, 4, 5, 6, 7];
const newPop = popArray.pop();
console.log(`New Array by removing the last element : ${popArray}`);

//Task-5 : Use the `shift` method to remove the first element from the array and log the updated array.

const shiftArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const removeFirstByShift = shiftArray.shift();
console.log(`New Array by shift method : ${shiftArray}`);

//Task-6 : Use the `unshift` method to add a new number to the beginning of the array and log the updated array.

const unShiftArray = [4, 5, 6];
const addByUnshiftArray = unShiftArray.unshift(1, 2, 3);
console.log(`New Array by Unshift Array : ${unShiftArray}`);

//Activity-3 : Array Methods(Intermediate)

//Task-7 : Use the `map` method to create a new array where each element is doubled and log the new array.

const arrayMap = [1, 2, 3, 4, 5, 6];
const newArrayMap = arrayMap.map((e) => {
  return e * 2;
});
console.log(`New array By Using Map: ${newArrayMap}`);

//Task-8 : Use the `filter` method to create a new array with only even numbers and log the new array.

const arrayFilter = [2, 10, 13, 20, 23, 28];
const newArrayFilter = arrayFilter.filter((e) => {
  if (e % 2 === 0) return e;
});
console.log(`Even Numbers by Filter Method: ${newArrayFilter}`);

//Task-9 : Use the `reduce` method to calculate the sum of all numbers in the array and log the result.

const arrayReduce = [1, 2, 3, 4, 5, 6];
const sumArrayReduce = arrayReduce.reduce((s1, s2) => {
  return s1 + s2;
});

console.log(`Sum of Array by reduce method : ${sumArrayReduce}`);

//Activity-4 : Array Iteration :

//Task-10 : Use a `for` loop to iterate over the array and log each element to the console.

const itrArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < itrArray.length; i++) {
  console.log(itrArray[i]);
}

//Task-11 :  Use the `forEach` method to iterate over the array and log each element to the console.

const forEachArray = [10, 20, 30, 40, 50];
forEachArray.forEach((e) => {
  console.log(e);
});

//Activity-5 : Multi-dimensional Arrays

//Task-12 : Create a two-dimensional array (matrix) and log the entire array to the console.

const matrixArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrixArray);

//Task-13 : Access and log a specific element from the two-dimensional array.

const specificArrayMatrix = matrixArray[1][2]
console.log(specificArrayMatrix)
