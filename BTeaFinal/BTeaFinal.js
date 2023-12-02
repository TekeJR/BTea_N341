/*9
    Title: BTeaMidterm.js
    Author: Brendan Tea
    Purpose: Culmination of Javascript skills
    Originally created on: 12/1/23
    Last modified on: 12/1/23
*/
//Setup functions
function output(ID, newMessage) {
    var elMessage = document.getElementById(ID);
    elMessage.innerHTML = newMessage; //Req 19: Use innerHTML to change page element or add a new one.
};

//Arrays
const ramen = ["Veggie", " Miso", " Shio", " Tsukemen Chicken", " Tsukemen Tonkatsu"]; //Req 4: Create and use an array.
const eggs = [1, 2, 3, 4, 5];

function ArrayConcat(ID) { //Req 4: Create and use an array.
    ramen[2] = ramen[2].concat(" (Low Sodium Concat)",); //Req 6: Use 1 string method.
    var el = document.getElementById(ID); //Req 21: Select a page element by ID.
    el.innerHTML = ramen; //Req 19: Use innerHTML to change page element or add a new one. 
};

function listAddRamen(ID) { //Req 4: Create and use an array.
    var el = document.getElementById(ID); //Req 21: Select a page element by ID.
    el.innerHTML = ramen; //Req 19: Use innerHTML to change page element or add a new one.
};

function LoopEx() { //Req 16: Use a loop.
    let text = "";
    for (let i = 0; i < ramen.length; i++) { //Req 5: Use 2 arithmetic operators.
        text += ramen[i] + "<br>";
    };
    return "Ramen array Loop: " + text;
};


output("loop", LoopEx());
//Garlic Ramen Object
var garTonk = { //Req 17: Create and use an object that has properties and methods.
    name: "Garlic Tonkatsu Ramen",
    chashu: true,
    chicken: false,
    eggs: 1,
    seaweed: true,
    menma: true,
    moyashi: true,
    edona: false,
    details: function() { //Req 18: Use the keyword this.
        return "Name: " + this.name + "<br>Chashu: " + this.chashu + "<br>Chicken: " + this.chicken + "\
        <br>Eggs: " + this.eggs + "<br>Seaweed: " + this.seaweed + "<br>Menma: " + this.menma + "<br>Moyashi: " + this.moyashi + "<br>Edona: " + this.edona; 
    },
    addEgg: function() {
        this.eggs++; //Req 5: Use 2 arithmetic operators.
        return "New Egg Amount (adding 1 egg): " + this.eggs; //Req 18: Use the keyword this.
    },
    deleteEgg: function() {
        this.eggs--; //Req 5: Use 2 arithmetic operators.
        return "New Egg Amount (delete 1 egg): " + this.eggs; //Req 18: Use the keyword this.
    },
    eggMath: function() {
        this.eggs = Math.pow(this.eggs, 4); //Req 15: Use a Math Object method.
        return "Powered Egg Amount (Pow operator): " + this.eggs; //Req 18: Use the keyword this.
    }, // Req 11: Initialize object with values, call each of the methods and output modified values.
};

output("garlicRamen", garTonk.details()); // Req 11: Initialize object with values, call each of the methods and output modified values.
output("garlicPlusEgg", garTonk.addEgg()); // Req 11: Initialize object with values, call each of the methods and output modified values.
output("garlicEggMath", garTonk.eggMath()); // Req 11: Initialize object with values, call each of the methods and output modified values.
output("garlicMinusEgg", garTonk.deleteEgg()); // Req 11: Initialize object with values, call each of the methods and output modified values.

//Comparison and Operators
function andOP() { 
    if (garTonk.edona || garTonk.moyashi) { // Req 17 & 7: garTonk.edona is Falsy with no comparison operator. Use at least 1 logical operator.
        return "OR Logical Operator result: There is either edona or moyashi in the ramen.";
    } else {
        return "Error";
    }
};

output("OR", andOP());

function ifElseConstruct() {
    if (eggs[1]<eggs[3]) { //Req 5 & 6: Use if/else construct or switch statement with at least three case values and a default code block. Use at least two comparison operators.
        return "If-Else construct result: Eggs[3] is bigger than Eggs[1].";
    } else {
        return "If-Else construct result: Eggs[1] is bigger than Eggs[3]."
    }
};

function equalTo() { 
    if (eggs[2]!==eggs[4]) { //Req 5 & 6: Use if/else construct or switch statement with at least three case values and a default code block. Use at least two comparison operators.
        return "Equal to operator result: eggs[2] is NOT equal to eggs[4].";
    } else {
        return "Error";
    }
};

output("ifElse", ifElseConstruct());
output("equalto", equalTo());

//Parsing
var elParse = document.getElementById("Parse"); //Req 21: Select a page element by ID.

function parseGar(numGarlic) {
    numGarlic = parseInt(numGarlic); // Req 8: Use ParseInt to convert a string to an integer.
    elParse.textContent = "ParseInt garlic result: " + numGarlic + " \
    initial garlic scoops" + " + 5 additional garlic scoops = " + (numGarlic + 5) + " total garlic scoops."; // Req 18: Select a single page element and change it with textContent.
};

parseGar("2");

//Date Function
function displayTime() {
    const d = new Date(); //Req 16: Use a Date Object method.
    return "Date Object: " + d;
};
output("time", displayTime());

//Day Function
function daySwitch() { //Req 5: Use if/else construct or switch statement with at least three case values and a default code block. 
 
    switch (5) { 
        case 0:
            day = "Monday";
            break;
        case 1:
            day = "Tuesday";
            break;
        case 2:
            day = "Wednesday";
            break;
        case 3:
            day = "Thursday";
            break;
        case 4:
            day = "Friday";
            break;
        case 5:
            day = "Saturday";
            break;
        case 6:
            day = "Sunday";
            break;
        default:
            day = "Day not found";
    };
    return "Switch result: Today is " + day;
};
output("dayCycle", daySwitch());

 //Selecting Classes
function popIzaItem() { //Req 20: Select page elements by class name.
    const izakayaItemsSelection = document.getElementsByClassName("izafood");
    izakayaItemsSelection[0].innerHTML = "Karaage (#1 Popular Izakaya Item!)";
    izakayaItemsSelection[1].innerHTML = "Pork Gyoza (#2 Popular Izakaya Item!)";
};

//JQuery
$('footerBtn').click(function(){ //Req 9: use jQuery to remove or hide a page element.
    $('footer').remove();
});

$('izaBtn').on({
    dblclick: function() {
        $('iza').addClass('newStyle');
    }
});

//Events
function bgColorChange(ID) { //Req 28: Create 2 focus/blur or focusin/focusout events. 
    var el = document.getElementById(ID); //Req 21: Select a page element by ID.
    el.style.backgroundColor = "gold";
};

function logicBorder(ID) { //Req 28: Create 2 focus/blur or focusin/focusout events. 
    var el = document.getElementById(ID);
    el.style.borderStyle = "solid";
};

function logicBorderNone(ID) { //Req 28: Create 2 focus/blur or focusin/focusout events. 
    var el = document.getElementById(ID);
    el.style.borderStyle = "none";
};

function bgColorChangeReg(ID) { //Req 28: Create 2 focus/blur or focusin/focusout events. 
    var el = document.getElementById(ID); //Req 21: Select a page element by ID.
    el.style.backgroundColor = "white";
};

function redColorText(ID) {
    var el = document.getElementById(ID); //Req 21: Select a page element by ID.
    el.style.color = "red";
};

function bgBodyColorChange(ID) { //Req 30: Create at least 1 keyboard event with visible results, (Pressing a key)
    var el = document.getElementById(ID);
    el.style.backgroundColor = "rgb(24, 3, 3)"
};

function bgBodyColorChangeReg(ID) { //Req 30: Create at least 1 keyboard event with visible results, (Releasing a key)
    var el = document.getElementById(ID);
    el.style.backgroundColor = "black"
};

function leavePage() { //Req 33: Create event that alerts the user before leaving the page.
    return;
};

function changeText(val) { // Req 32: Create mutation event with visible results
    val.innerHTML = "Mutation Event! KiZuKi OrDeR fOrM";
};



var logicMouseOver = document.getElementById("logic"); 
logicMouseOver.addEventListener("mouseover", function() { //Req 29: Create 2 mouse events with visible changes (mouseover event).
    logicBorder("logic"); //Req 28: Create 2 focus/blur or focusin/focusout events.
});

logicMouseOver.addEventListener("mouseout", function() { //Req 29: Create 2 mouse events with visible changes (mouseout event).
    logicBorderNone("logic"); //Req 28: Create 2 focus/blur or focusin/focusout events.
});

var submitConfirmation = document.getElementById("subreminder"); //Req 24: Use event listener with parameter to produce visuble results on screen when user clicks page element.
submitConfirmation.addEventListener("click", function() { //Req 29: Create 2 mouse events with visible changes (click event).
    reminderClickEvent(this); //Req 18: Use the keyword this.
});

function reminderClickEvent(ID) {
    var el = document.getElementById("submitReminder");
    el.innerHTML = "Event handler with parameters event: Make sure all of your information is correct before submitting!";
};

submitConfirmation.addEventListener("mouseout", function() {
    var el = document.getElementById("submitReminder");
    el.innerHTML = "";
});

var bgBody = document.getElementById("body");
bgBody.addEventListener("keydown", function() { //Req 30: Create at least 1 keyboard event with visible results, (Pressing a key)
    bgBodyColorChange("body");
});

bgBody.addEventListener("keyup", function() { //Req 30: Create at least 1 keyboard event with visible results, (Releasing a key)
    bgBodyColorChangeReg("body");
});

var message = document.getElementById("form"); 
message.addEventListener("submit", function() { //Req 31: Create form event that produces visible result on page (onsubmit event).
        alert("Your order has been submitted! Thank you!");
    });

//Event Bubbling
const body = document.getElementsByTagName("body")[0] // Req 25: Demonstrate event bubbling.
const div = document.getElementsByTagName("div")[4]
const ul = document.getElementsByTagName("ul")[0]
const li = document.getElementsByTagName("li")[0]

body.addEventListener("click", () => { 
    console.log("body clicked");
});

div.addEventListener("click", () => {
    console.log("addIza div clicked");
});

ul.addEventListener("click", () => {
    console.log("ul element clicked");
});

li.addEventListener("click", () => { // Req 26: Use method to stop event bubbling.
    event.stopPropagation(); //Req 27: Use event object in function or method.
    console.log("li element clicked");
});