"use strict";

////////declare variables////////
let update;
let rValue;
let bValue;
let gValue;
let imgURL;
let keyIndex;
const body = document.body;
const mainBody = document.querySelector("#mainBody");
const inputBody = document.querySelector("#inputBody");
const inputHere = document.querySelector("#inputHere");
const submitButton = document.querySelector("#submitButton");
const information = document.querySelector("#information");
const heading = document.querySelector("#heading");

const div = document.getElementById("div");
const addTask = document.querySelector("#addMore");
const removeTask = document.querySelector("#remove1");
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
  update = inputBody.textContent;
}

function updateToDo(a) {
  a.textContent = update;
}

editButton.addEventListener("click", function () {
  mainBody.classList.add("hidden");
  inputBody.classList.remove("hidden");
  information.textContent =
    "Enter your task in the empty field, then press submit to make the changes!";
  keyIndex = 1;
});
editButton2.addEventListener("click", function () {
  mainBody.classList.add("hidden");
  inputBody.classList.remove("hidden");
  information.textContent =
    "Enter your task in the empty field, then press submit to make the changes!";
  keyIndex = 2;
});
editButton3.addEventListener("click", function () {
  mainBody.classList.add("hidden");
  inputBody.classList.remove("hidden");
  information.textContent =
    "Enter your task in the empty field, then press submit to make the changes!";
  keyIndex = 3;
});
editButton4.addEventListener("click", function () {
  mainBody.classList.add("hidden");
  inputBody.classList.remove("hidden");
  information.textContent =
    "Enter your task in the empty field, then press submit to make the changes!";
  keyIndex = 4;
});

submitButton.addEventListener("click", function () {
  if (keyIndex == 5) {
    rValue = Number(inputHere.value);
    keyIndex = 6;
    inputHere.value = "Type here";
    information.textContent =
      "Enter your green value! (a number between 0 and 255)";
    return rValue;
  } else if (keyIndex == 6) {
    gValue = Number(inputHere.value);
    keyIndex = 7;
    inputHere.value = "Type here";
    information.textContent =
      "Enter your blue value! (a number between 0 and 255)";
    return gValue;
  } else if (keyIndex == 7) {
    bValue = Number(inputHere.value);
    mainBody.classList.remove("hidden");
    inputBody.classList.add("hidden");
    inputHere.value = "Type here";
    body.style.backgroundImage = null;
    body.style.backgroundColor = `rgb(${rValue}, ${gValue}, ${bValue})`;
    if (rValue + bValue + gValue <= 200) {
      information.style.color = "white";
      heading.style.color = "white";
    } else {
      information.style.color = "black";
      heading.style.color = "black";
    }
    return bValue;
  } else if (keyIndex == 8) {
    imgURL = inputHere.value;
    body.style.opacity = null;
    body.style.backgroundColor = null;
    body.style.backgroundImage = `url(${imgURL})`;
    mainBody.classList.remove("hidden");
    inputBody.classList.add("hidden");
  } else {
    update = inputHere.value;
    if (keyIndex == 1) {
      updateToDo(toDo);
    } else if (keyIndex == 2) {
      updateToDo(toDo2);
    } else if (keyIndex == 3) {
      updateToDo(toDo3);
    } else if (keyIndex == 4) {
      updateToDo(toDo4);
    }
    mainBody.classList.remove("hidden");
    inputBody.classList.add("hidden");
  }
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
  if (div.classList.contains("hidden")) {
    removeHidden(div);
    removeHidden(addTask);
  } else if (div2.classList.contains("hidden")) {
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
    addHidden(addTask);
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
function checkForNoDouble() {
  if (
    !addTask4.classList.contains("hidden") &&
    !div4.classList.contains("hidden")
  ) {
    addHidden(addTask3);
    addHidden(addTask2);
  }
}
function ifOnlyOne() {
  if (
    !div.classList.contains("hidden") &&
    div2.classList.contains("hidden") &&
    div3.classList.contains("hidden") &&
    div4.classList.contains("hidden")
  ) {
    addHidden(removeTask);
  } else if (
    div.classList.contains("hidden") &&
    !div2.classList.contains("hidden") &&
    div3.classList.contains("hidden") &&
    div4.classList.contains("hidden")
  ) {
    addHidden(removeTask2);
  } else if (
    div.classList.contains("hidden") &&
    div2.classList.contains("hidden") &&
    !div3.classList.contains("hidden") &&
    div4.classList.contains("hidden")
  ) {
    addHidden(removeTask3);
  } else if (
    div.classList.contains("hidden") &&
    div2.classList.contains("hidden") &&
    div3.classList.contains("hidden") &&
    !div4.classList.contains("hidden")
  ) {
    addHidden(removeTask4);
  } else {
    removeHidden(removeTask);
    removeHidden(removeTask2);
    removeHidden(removeTask3);
    removeHidden(removeTask4);
  }
}

addHidden(removeTask);

addTask.addEventListener("click", function () {
  addButtonChange();
  checkForCorrectAdd();
  checkForNoDouble();
  ifOnlyOne();
});
addTask2.addEventListener("click", function () {
  addButtonChange();
  checkForCorrectAdd();
  checkForNoDouble();
  ifOnlyOne();
});
addTask3.addEventListener("click", function () {
  addButtonChange();
  checkForCorrectAdd();
  checkForNoDouble();
  ifOnlyOne();
});
addTask4.addEventListener("click", function () {
  addButtonChange();
  checkForCorrectAdd();
  checkForNoDouble();
  ifOnlyOne();
});

removeTask.addEventListener("click", function () {
  addHidden(div);
  checkForCorrectAdd();
  checkForNoDouble();
  ifOnlyOne();
});
removeTask2.addEventListener("click", function () {
  addHidden(div2);
  checkForCorrectAdd();
  checkForNoDouble();
  ifOnlyOne();
});
removeTask3.addEventListener("click", function () {
  addHidden(div3);
  checkForCorrectAdd();
  checkForNoDouble();
  ifOnlyOne();
});
removeTask4.addEventListener("click", function () {
  addHidden(div4);
  checkForCorrectAdd();
  checkForNoDouble();
  ifOnlyOne();
});

/////////Change background color/////////
backgroundColor.addEventListener("click", function () {
  mainBody.classList.add("hidden");
  inputBody.classList.remove("hidden");
  information.textContent =
    "Enter your red value! (a number between 0 and 255)";
  keyIndex = 5;
});

backgroundImage.addEventListener("click", function () {
  mainBody.classList.add("hidden");
  inputBody.classList.remove("hidden");
  information.textContent =
    "Paste the URL of the image you'd like to use as background! (Careful, a black or white image may cause some text to be invisible. You can always change it back to rgb values with it's corresponding button!)";
  keyIndex = 8;
});
