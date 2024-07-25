//Activity-1 : Selecting and Manipulating Elements

//Task-1 : Select an HTML element by its ID and change its context.

const tas1Id = document.getElementById("tas1Id");
tas1Id.innerHTML = "Text Changed Using JS";

//Task-2 : Select an HTML element by its class  and change its background color.

const bgColorChange = document.querySelector(".bg-colorChange");
bgColorChange.style.backgroundColor = "green";

//Activity-2 : Creating and Appending Elements.

//Task-3 : Create a new `div` element with some text content and append it to the body

const div3 = document.createElement("div");
div3.innerHTML = "Hello JavaScript";
document.body.appendChild(div3);

//Task-4 : Create a new `li` element and add it to the existing ul list

const ul = document.querySelector(".ul");
const li = document.createElement("li");
li.innerHTML = "JAVASCRIPT";
ul.appendChild(li);

//Activity-3 : Removing Elements

//Task-5 : Select an HTML element and remove it from the DOM

const task5 = document.querySelector(".task5");
task5.remove();

//Task-6 : Remove the last child of a specific HTML element.

const parentElement = document.getElementById("parentElement");
parentElement.removeChild(parentElement.lastChild);

//Activity-4 : Modifying Attributes and Classes

//Task-7 : Select an HTML element and change one of its attributes(e.g., `src` of an `img` tag)

const imageChange = document.querySelector(".imageChange");
imageChange.src = "/secondImg.jpg";

//Task-8 : Add and remove a CSS class to/from an HTML element

const task8 = document.querySelector(".task8");
task8.classList.add("removeClass");
task8.classList.remove("addClass");

//Activity-5 : Event Handling

//Task-9 : Add a click event listener to a button that changes the text content of the paragraph

const changePara = document.querySelector(".change-para");
const changeParaBtn = document.querySelector(".change-paraBtn");

changeParaBtn.addEventListener("click", () => {
  changePara.innerHTML = "HELLO WELCOME TO KOLKATA";
});

//Task-10 : Add a mouseover event listener to an element that changes its border color

const task10 = document.querySelector(".task10")
task10.addEventListener("mouseover",()=>{
    task10.style.borderColor = "green"
})


