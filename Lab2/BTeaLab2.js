/*
    Title: BTeaLab2.js
    Author: Brendan Tea
    Purpose: Using Decisions and Loops, Manipulating DOM
    Originally created on: 9/20/23
    Last modified on: 9/24/23
*/
var  strMessage = "";
var intNum = 0;
var bolGluten = true;

function output(ID, newMessage) {
    var elMessage = document.getElementById(ID);
    elMessage.innerHTML = newMessage;
};

output("message", "Welcome Brendan!");
output("footer", "Thank you for ordering from us!");
output("GarlicTonkDesc", "Our most popular ramen! Customers are satisfied everytime!");

const ramen = ["Garlic Tonkatsu", " Tonkatsu", " Shoyu", " Miso", " Shio"];
const eggs = [1, 2, 3, 4, 5];

output("ramenTypes", ramen);
output("eggNum", eggs);

ramen[0] = ramen[0].slice(3, 11);
ramen[1] = ramen[1].replace("Tonkatsu", "Veggie");
ramen[2] = ramen[2].toLowerCase();
ramen[3] = ramen[3].toUpperCase();
ramen[4] = ramen[4].concat(" and ", ramen[2]);

output("ramenTypesALT", ramen);

eggs[0] = eggs[0] + 18;
eggs[1] = eggs[1] - 3;
eggs[2] = eggs[2] / 3;
eggs[3] = eggs[3] * 4;
eggs[4] = eggs[4] % 2;

output("eggNumALT", eggs);

var garTonk = {
    name: "Garlic Tonkatsu Ramen",
    eggs: 2,
    seaweed: false,
    menma: true,
    moyashi: true,
    details: function() {
        return "Name: " + this.name + ", Egg Num: " + this.eggs + ", Seaweed: " + this.seaweed + ", Menma: " + this.menma + ", Moyashi: " + this.moyashi;
    },
    addEgg: function() {
        this.eggs++; 
        return "New Egg Amount: " + this.eggs;
    },
    eggMath: function() {
        this.eggs = Math.pow(this.eggs, 4);
        return "Powered Egg Amount: " + this.eggs;
    },
    displayTime: function() {
        const d = new Date();
        return d;
    }
};

output("garObj", garTonk.details());
output("garEggs", garTonk.addEgg());
output("mathEggs", garTonk.eggMath());
output("time", garTonk.displayTime());

//Lab 2 Js additions for assignment

function ifElseConstruct() { // Req 3 & 4: Demonstrate if/else construct, Demonstrate comparison operators
    if (eggs[1]<eggs[3]) {
        return "If-Else construct result: Eggs[3] is bigger than Eggs[1].";
    } else {
        return "If-Else construct result: Eggs[1] is bigger than Eggs[3]."
    }
};
function equalTo() { // Req 3 & 4: Demonstrate if/else construct, Demonstrate comparison operators
    if (eggs[2]==eggs[4]) {
        return "Equal to operator result: eggs[2] is equal to eggs[4].";
    } else {
        return "Error";
    }
};
output("ifElse", ifElseConstruct());
output("equalto", equalTo());

function andOP() { // Req 5: Use 2 logical operations.
    if (garTonk.menma && garTonk.moyashi) {
        return "AND Logical Operator result: There is menma and moyashi in the ramen.";
    } else {
        return "Error";
    }
};
function orOP() { // Req 5 & 11: Use 2 logical operations. Use Falsey value, not boolean.
    if (garTonk.seaweed || garTonk.moyashi) {
        return "OR Logical Operator result: There is not seaweed in the ramen, but there is moyashi.";
    } else {
        return "Error";
    }
};
output("AND", andOP());
output("OR", orOP());

function daySwitch() {
    switch (3) { // Req 6: Use a switch statement with at least 3 cases, and a default.
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
    }
    return "Switch result: Today is " + day;
};
output("switch", daySwitch());

var elParseConcat = document.getElementById("ParseCon");
var elParse = document.getElementById("Parse");

elParseConcat.textContent = "Parse normal results:  20 + 10 = " + ("20" + 10); // Req 7: Use ParseInt to demonstrate 2 digits stored as strings and adding the same 2 digits as integers.

function parse(numDigit) {
    //elParseConcat.textContent = "Parse normal results: " + numDigit + " + 10 = " + (numDigit + 10);
    numDigit = parseInt(numDigit); // Req 7: Use ParseInt to demonstrate 2 digits stored as strings and adding the same 2 digits as integers.
    elParse.textContent = "ParseInt result: " + numDigit + " + 10 = " + (numDigit + 10); // Req 12: Select a single page element and change it with textContent.
};

parse(20);

function equalsComparison() { // Req 8 & 10: Demonstrate difference between == and ===. Use Truthy value, not boolean.
    var strEdona = "1";
    var intEdona = 1;
    if (strEdona == intEdona) {
        return "strEdona == intEdona = True";
    } else {
        return "strEdona === intEdona = False";
    };
};
function equalsComparisonType() { // Req 8: Demonstrate difference between == and ===.
    var strEdona = "1";
    var intEdona = 1;
    if (strEdona === intEdona) {
        return "strEdona == intEdona = True";
    } else {
        return "strEdona === intEdona = False";
    };
};

output("equalcomp1", equalsComparison());
output("equalcomp2", equalsComparisonType());

function LoopEx() { // Req 9: Use a loop to output the contents of an array.
    let text = "";
    //let elPrint = document.getElementById("loop"); // first iteration of loop
    for (let i = 0; i < ramen.length; i++) {
        text += ramen[i] + "<br>";
        
    };
    //return elPrint.textContent = "Loop result: " + text; // first iteration of loop
    return "Loop: " + text; // revised loop
};
output("loop", LoopEx());

const classExample = document.getElementsByClassName("demoClass"); // Req 13: Selecting 3 elements by attribute, using innerHTML and changing formatting as well.
document.getElementById("demo").innerHTML =  "Selecting multiple elements, changing formatting and content: " + classExample[0].innerHTML;
const classExamplecss = document.getElementsByClassName("demoClass");
document.getElementById("demo").style.color = "red";

function classLoop() { // Unfinished Req 14: Loop through req 13 selection and add a class to each element.
    const classDemo = document.getElementById("classloop");
    for (let i = 0; i <classExample.length; i++) {
        classDemo.classList.add("newClass");
    };
};

function elementOutput() { // Req 15: Demonstrate different between innerHTML and textContent for outputting and HTML element with content.
    var innerElement =  document.getElementById("innerElement");
    var message = "<em>Inner Element Output</em>"
    return innerElement.innerHTML = message;
};
output("innerElement", elementOutput());

function contentElementOutput() { // Req 15: Demonstrate different between innerHTML and textContent for outputting and HTML element with content.
    var contentElement = document.getElementById("contentElement");
    var message = "<em>Text Content Element Output</em>"
    return contentElement.textContent = message; // I'm not sure why this isn't working, I followed the example given in the assignment, all that's different is putting it into a function.
};
output("contentElement", contentElementOutput());

var tag = document.createElement("p");
var note = document.createTextNode("This text is added in the javascript!");
tag.appendChild(note);
document.getElementById("parent").appendChild(tag); // Req 16: Add page element with content to the page.

document.getElementById("changeID").setAttribute("id", "IDisChanged") // Req 17 & 18: select a page element based on ID and change the value of the ID. Must show visible results
document.getElementById("IDisChanged").innerHTML = "ID has been changed!";

document.getElementById("footer").remove(); // Req 19: Remove a page element