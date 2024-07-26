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

//Task-5 : 