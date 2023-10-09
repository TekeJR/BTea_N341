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
};

function Normal(ID) {
    var el = document.getElementById(ID);
    el.style.color = "black";

};

var elHeader = document.getElementById("GarTonk"); // Req 4: Use event Listener with parameters and show visible results on page.
elHeader.onmouseover = function() {Highlight("GarTonk")};
elHeader.onmouseout = function() {Normal("GarTonk")};

const body = document.getElementsByTagName("body")[0] // Req 5: Demonstrate event bubbling with nested HTML elements with events bound to them.
const div = document.getElementsByTagName("div")[0]
const Dbutton = document.getElementsByTagName("button")[ 1]
const Shoyu = document.getElementsByTagName("dt")[2]

body.addEventListener("click", () => { 
    console.log("body clicked");
});
div.addEventListener("click", () => {
    console.log("div clicked");
});
Dbutton.addEventListener("click", () => {
    console.log("detail button clicked");
});
Shoyu.addEventListener("click", () => { // Req 7: Use method to stop event bubbling
    event.stopPropagation();
    console.log("Shoyu clicked");
});

function noteColor() { // Req 8 & 11: Use 2 blur or focus events, use 2 form events with visible results
    var el = document.getElementById("notes");
    el.style.backgroundColor = "lightgrey";
};

function noteColorReg() {
    var el = document.getElementById("notes");
    el.style.backgroundColor = "white";
};

function Glow(ID) {
    var el = document.getElementById(ID);
    el.style.backgroundColor = "red";
};

function bigText(ID) {
    var el = document.getElementById(ID);
    el.style.fontSize = "3em";
};

function Italics(ID) {
    var el = document.getElementById(ID);
    el.style.fontStyle = "italic";
};

var elShoyu = document.getElementById("Shoyu"); // Req 9: Create 3 mouse events with visible results.
elShoyu.onclick = function() {Glow("Shoyu")};

var elShio = document.getElementById("Shio"); // Req 9: Create 3 mouse events with visible results.
elShio.onclick = function() {bigText("Shio")};

var elMiso = document.getElementById("Miso"); // Req 9: Create 3 mouse events with visible results.
elMiso.onclick = function() {Italics("Miso")};

function ColorText() { // Req 10: Create 2 keybaord events with visible results
    var el = document.getElementById("notes");
    el.style.color = "red";
};
function ColorTextReg() {
    var el = document.getElementById("notes");
    el.style.color = "green";
};

function ChangeAlert(val) { // Req 11: Create 2 form events with visible results.
    alert("This is the onchange event after blurring the text box:]. You said: " + "'" + val + "'")
};

function ChangeText(val) { // Req 12: Create mutation event with visible results
    val.innerHTML = "Mutation Event! New Title!";
};

function leavePage() {
    return "Nothing";
};