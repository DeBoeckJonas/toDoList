"use strict";

////////declare variables////////
let update;
let rValue;
let bValue;
let gValue;
let imgURL;
const body = document.body;

const addButton = document.querySelector(".addButton");
const removeButton = document.querySelector(".removeButton");

const div = document.getElementById("div");
const addTask = document.querySelector("#addMore");
const editButton = document.querySelector("#editButton");
const toDo = document.querySelector("#toDoList");
const hard = document.querySelector("#hard");
const medium = document.querySelector("#medium");
const easy = document.querySelector("#easy");

const div2 = document.getElementById("div2");
const editButton2 = document.querySelector("#editButton2");
const toDo2 = document.querySelector("#toDoList2");
const hard2 = document.querySelector("#hard2");
const medium2 = document.querySelector("#medium2");
const easy2 = document.querySelector("#easy2");
const addTask2 = document.querySelector("#addMore2");
const removeTask2 = document.querySelector("#remove2");

const div3 = document.getElementById("div3");
const editButton3 = document.querySelector("#editButton3");
const toDo3 = document.querySelector("#toDoList3");
const hard3 = document.querySelector("#hard3");
const medium3 = document.querySelector("#medium3");
const easy3 = document.querySelector("#easy3");
const addTask3 = document.querySelector("#addMore3");
const removeTask3 = document.querySelector("#remove3");

const div4 = document.getElementById("div4");
const editButton4 = document.querySelector("#editButton4");
const toDo4 = document.querySelector("#toDoList4");
const hard4 = document.querySelector("#hard4");
const medium4 = document.querySelector("#medium4");
const easy4 = document.querySelector("#easy4");
const addTask4 = document.querySelector("#addMore4");
const removeTask4 = document.querySelector("#remove4");

const backgroundColor = document.querySelector("#backgroundColor");
const backgroundImage = document.querySelector("#backgroundImage");

////////change toDoList////////
function updatePrompt() {
  update = prompt("New to do list:");
}

function updateToDo(a) {
  a.textContent = update;
}

editButton.addEventListener("click", function () {
  updatePrompt();
  updateToDo(toDo);
});
editButton2.addEventListener("click", function () {
  updatePrompt();
  updateToDo(toDo2);
});
editButton3.addEventListener("click", function () {
  updatePrompt();
  updateToDo(toDo3);
});
editButton4.addEventListener("click", function () {
  updatePrompt();
  updateToDo(toDo4);
});

////////change color of todo based on difficulty////////
function toDoColor(a, b) {
  a.style.color = b;
}

hard.addEventListener("click", function () {
  toDoColor(toDo, "red");
});
medium.addEventListener("click", function () {
  toDoColor(toDo, "cyan");
});
easy.addEventListener("click", function () {
  toDoColor(toDo, "chartreuse");
});

hard2.addEventListener("click", function () {
  toDoColor(toDo2, "red");
});
medium2.addEventListener("click", function () {
  toDoColor(toDo2, "cyan");
});
easy2.addEventListener("click", function () {
  toDoColor(toDo2, "chartreuse");
});

hard3.addEventListener("click", function () {
  toDoColor(toDo3, "red");
});
medium3.addEventListener("click", function () {
  toDoColor(toDo3, "cyan");
});
easy3.addEventListener("click", function () {
  toDoColor(toDo3, "chartreuse");
});

hard4.addEventListener("click", function () {
  toDoColor(toDo4, "red");
});
medium4.addEventListener("click", function () {
  toDoColor(toDo4, "cyan");
});
easy4.addEventListener("click", function () {
  toDoColor(toDo4, "chartreuse");
});

/////////add and remove task/////////
function removeHidden(a) {
  a.classList.remove("hidden");
}
function addHidden(a) {
  a.classList.add("hidden");
}

function addButtonChange() {
  if (div2.classList.contains("hidden")) {
    removeHidden(div2);
    removeHidden(addTask2);
  } else if (div3.classList.contains("hidden")) {
    removeHidden(div3);
    removeHidden(addTask3);
  } else if (div4.classList.contains("hidden")) {
    removeHidden(div4);
    removeHidden(addTask4);
  }
}
function checkForCorrectAdd() {
  if (
    (div.classList.contains("hidden") ||
      div2.classList.contains("hidden") ||
      div3.classList.contains("hidden")) &&
    !div4.classList.contains("hidden")
  ) {
    removeHidden(addTask4);
  } else if (
    !div3.classList.contains("hidden") &&
    div4.classList.contains("hidden")
  ) {
    removeHidden(addTask3);
    addHidden(addTask);
    addHidden(addTask2);
  } else if (
    !div2.classList.contains("hidden") &&
    div4.classList.contains("hidden") &&
    div3.classList.contains("hidden")
  ) {
    removeHidden(addTask2);
    addHidden(addTask);
  } else if (
    !div.classList.contains("hidden") &&
    div2.classList.contains("hidden") &&
    div4.classList.contains("hidden") &&
    div3.classList.contains("hidden")
  ) {
    removeHidden(addTask);
    console.log("e");
  } else if (
    !div.classList.contains("hidden") &&
    !div2.classList.contains("hidden") &&
    !div3.classList.contains("hidden") &&
    !div4.classList.contains("hidden")
  ) {
    addHidden(addTask4);
    addHidden(addTask3);
    addHidden(addTask2);
    addHidden(addTask);
  }
}

addTask.addEventListener("click", function () {
  addButtonChange();
  checkForCorrectAdd();
});
addTask2.addEventListener("click", function () {
  addButtonChange();
  checkForCorrectAdd();
});
addTask3.addEventListener("click", function () {
  addButtonChange();
  checkForCorrectAdd();
});
addTask4.addEventListener("click", function () {
  addButtonChange();
  checkForCorrectAdd();
});

removeTask2.addEventListener("click", function () {
  addHidden(div2);
  checkForCorrectAdd();
});
removeTask3.addEventListener("click", function () {
  addHidden(div3);
  checkForCorrectAdd();
});
removeTask4.addEventListener("click", function () {
  addHidden(div4);
  checkForCorrectAdd();
});

/////////Change background color/////////
backgroundColor.addEventListener("click", function () {
  rValue = prompt("R value:");
  gValue = prompt("G value:");
  bValue = prompt("B value:");
  body.style.backgroundImage = null;
  body.style.backgroundColor = `rgb(${rValue}, ${gValue}, ${bValue})`;
});

backgroundImage.addEventListener("click", function () {
  imgURL = prompt("Paste image URL");
  body.style.opacity = null;
  body.style.backgroundColor = null;
  body.style.backgroundImage = `url(${imgURL})`;
});
