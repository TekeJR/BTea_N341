/*
    Title: BTeaLab3.js
    Author: Brendan Tea
    Purpose: Using Decisions and Loops, Manipulating DOM
    Originally created on: 10/3/23
    Last modified on: 10/3/23
*/

function output(ID, newMessage) {
    var elMessage = document.getElementById(ID);
    elMessage.innerHTML = newMessage;
};

function GarDesc() { // Req 3: Use event listener without parameters and show visible results on page. 
    var el = document.getElementById("garTonkDesc");
    el.innerHTML = "- A rich ramen made with pork and chicken bone broth simmered over 12 hours per day. Served traditionally with garlic, pork belly, seaweed, moyashi and green onions.";
};

function Highlight(ID) {
    var el = document.getElementById(ID);
    el.style.color = "red";
}

function Normal(ID) {
    var el = document.getElementById(ID);
    el.style.color = "black";

}

var elHeader = document.getElementById("GarTonk"); // Req 4: Use event Listener with parameters and show visible results on page.
elHeader.onmouseover = function() {Highlight("GarTonk")};
elHeader.onmouseout = function() {Normal("GarTonk")};

const body = document.getElementsByTagName("body")[0] // Req 5: Demonstrate event bubbling with nested HTML elements with events bound to them.
const div = document.getElementsByTagName("div")[0]
const h1 = document.getElementsByTagName("h1")[0]
const dl = document.getElementsByTagName("dl")[0]
const button = document.getElementsByTagName("button")[1]

body.addEventListener("click", () => {
    console.log("body clicked")
});
div.addEventListener("click", () => {
    console.log("div clicked")
});
h1.addEventListener("click", () => {
    console.log("header(h1) clicked")
});
dl.addEventListener("click", () => {
    console.log("dl clicked")
});
button.addEventListener("click", () => {
    console.log("button clicked")
});
