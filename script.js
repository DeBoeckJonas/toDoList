"use strict";

////////declare variables////////
let update;

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

const removeTask4 = document.querySelector("#remove4");

////////change toDoList////////
function updatePrompt() {
  update = prompt("New to do list:");
}

editButton.addEventListener("click", function () {
  updatePrompt();
  toDo.textContent = update;
});
editButton2.addEventListener("click", function () {
  updatePrompt();
  toDo2.textContent = update;
});
editButton3.addEventListener("click", function () {
  updatePrompt();
  toDo3.textContent = update;
});
editButton4.addEventListener("click", function () {
  updatePrompt();
  toDo4.textContent = update;
});

////////change color of todo based on difficulty////////
hard.addEventListener("click", function () {
  toDo.style.color = "red";
});
medium.addEventListener("click", function () {
  toDo.style.color = "cyan";
});
easy.addEventListener("click", function () {
  toDo.style.color = "chartreuse";
});

hard2.addEventListener("click", function () {
  toDo2.style.color = "red";
});
medium2.addEventListener("click", function () {
  toDo2.style.color = "cyan";
});
easy2.addEventListener("click", function () {
  toDo2.style.color = "chartreuse";
});

hard3.addEventListener("click", function () {
  toDo3.style.color = "red";
});
medium3.addEventListener("click", function () {
  toDo3.style.color = "cyan";
});
easy3.addEventListener("click", function () {
  toDo3.style.color = "chartreuse";
});

hard4.addEventListener("click", function () {
  toDo4.style.color = "red";
});
medium4.addEventListener("click", function () {
  toDo4.style.color = "cyan";
});
easy4.addEventListener("click", function () {
  toDo4.style.color = "chartreuse";
});

/////////add and remove task/////////
addTask.addEventListener("click", function () {
  div2.classList.remove("hidden");
});
removeTask2.addEventListener("click", function () {
  div2.classList.add("hidden");
});

addTask2.addEventListener("click", function () {
  div3.classList.remove("hidden");
});
removeTask3.addEventListener("click", function () {
  div3.classList.add("hidden");
});

addTask3.addEventListener("click", function () {
  div4.classList.remove("hidden");
});
removeTask4.addEventListener("click", function () {
  div4.classList.add("hidden");
});
