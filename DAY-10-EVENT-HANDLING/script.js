//Activity-1 : Basic Event Handling

//Task-1 : Add a click event listener to a button that changes the text content of the paragraph

const task1 = document.querySelector(".task1");
const task1Btn = document.querySelector(".task1Btn");

task1Btn.addEventListener("click", () => {
  task1.innerHTML = "Hi Second Text Content";
});

//Task-2 : Add a double click event listener to an image that toggles its visibility

const task2 = document.querySelector(".task2");

task2.addEventListener("dblclick", () => {
  task2.classList.toggle("hidden");
});

//Activity-2 : Mouse Events

//Task-3 : Add a mouseover event listener to an element that changes its background color.

const task3 = document.querySelector(".task3");

task3.addEventListener("mouseover", () => {
  task3.style.background = "green";
});

//Task-4 : Add a mouseout event listener to an element that resets its background color.

task3.addEventListener("mouseout", () => {
  task3.style.background = "burlywood";
});

//Activity-3 : Keyboard Events

//Task-5 : Add a keydown event listener to an input field that logs the keypress to the console.

const task5 = document.querySelector(".task5");
task5.addEventListener("keydown", (e) => {
  console.log(`Key pressed is :${e.key}`);
});

//Task-6 : Add a keyup event listener to an input field that displays the current value in a paragraph.

const task6 = document.querySelector(".task6");
const task6Para = document.querySelector(".task6Para");

task6.addEventListener("keyup", () => {
  task6Para.textContent = `Current Value is : ${this.value}`;
});

//Activity-4 : Form Events

//Task-7 : Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
});

//Task-8 : Add a change event listener to a select dropdown that displays the selected value in a paragraph

document
  .getElementById("selectDropdown")
  .addEventListener("change", function () {
    document.getElementById(
      "displaySelectedValue"
    ).textContent = `Selected Value: ${this.value}`;
  });

//Activity-5 : Event Delegation

//Task-9 : Add a click event listener to a list that logs the text content of the clicked list item using event delegation

const task9 = document.getElementById("myList");

task9.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(`Clicked Item : ${e.target.textContent}`);
  }
});

//Task-10 : Add an event listener to a parent element that listens for events from dynamically  added child elements.

document.querySelector(".task10").addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${
    document.getElementById("myList").children.length + 1
  }`;
  document.getElementById("myList").appendChild(newItem);
});
