/*
    Title: BTeaMidterm.js
    Author: Brendan Tea
    Purpose: Culmination of Javascript skills thus far
    Originally created on: 10/15/23
    Last modified on: 10/21/23
*/
//Setup functions
function output(ID, newMessage) {
    var elMessage = document.getElementById(ID);
    elMessage.innerHTML = newMessage;
};

//Arrays
const ramen = ["Veggie", " Miso", " Shio", " Tsukemen Chicken", " Tsukemen Tonkatsu"];
const eggs = [1, 2, 3, 4, 5];

function ArrayConcat(ID) {
    ramen[2] = ramen[2].concat(" (Low Sodium Concat)",);
    var el = document.getElementById(ID);
    el.innerHTML = ramen;
};

function listAddRamen(ID) {
    var el = document.getElementById(ID);
    el.innerHTML = ramen;
};

function LoopEx() {
    let text = "";
    for (let i = 0; i < ramen.length; i++) {
        text += ramen[i] + "<br>";
    };
    return "Ramen array Loop: " + text;
};


output("loop", LoopEx());
//Garlic Ramen Object
var garTonk = {
    name: "Garlic Tonkatsu Ramen",
    chashu: true,
    chicken: false,
    eggs: 1,
    seaweed: true,
    menma: true,
    moyashi: true,
    edona: false,
    details: function() {
        return "Name: " + this.name + "<br>Chashu: " + this.chashu + "<br>Chicken: " + this.chicken + "<br>Eggs: " + this.eggs + "<br>Seaweed: " + this.seaweed + "<br>Menma: " + this.menma + "<br>Moyashi: " + this.moyashi + "<br>Edona: " + this.edona; 
    },
    addEgg: function() {
        this.eggs++; 
        return "New Egg Amount (adding 1 egg): " + this.eggs;
    },
    deleteEgg: function() {
        this.eggs--;
        return "New Egg Amount (delete 1 egg): " + this.eggs;
    },
    eggMath: function() {
        this.eggs = Math.pow(this.eggs, 4);
        return "Powered Egg Amount (Pow operator): " + this.eggs;
    },
};

output("garlicRamen", garTonk.details());
output("garlicPlusEgg", garTonk.addEgg());
output("garlicEggMath", garTonk.eggMath());
output("garlicMinusEgg", garTonk.deleteEgg());

//Comparison and Operators
function andOP() { 
    if (garTonk.edona || garTonk.moyashi) { // Req 17: garTonk.edona is Falsy with no comparison operator.
        return "OR Logical Operator result: There is either edona or moyashi in the ramen.";
    } else {
        return "Error";
    }
};
output("AND", andOP());

function ifElseConstruct() {
    if (eggs[1]<eggs[3]) {
        return "If-Else construct result: Eggs[3] is bigger than Eggs[1].";
    } else {
        return "If-Else construct result: Eggs[1] is bigger than Eggs[3]."
    }
};
function equalTo() {
    if (eggs[2]!==eggs[4]) {
        return "Equal to operator result: eggs[2] is NOT equal to eggs[4].";
    } else {
        return "Error";
    }
};

output("ifElse", ifElseConstruct());
output("equalto", equalTo());

//Date Function
function displayTime() {
    const d = new Date();
    return "Date Object: " + d;
};
output("time", displayTime());

//Day Function
function daySwitch() {
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
    }
    return "Switch result: Today is " + day;
};
output("dayCycle", daySwitch());

//Events
function bgColorChange(ID) {
    var el = document.getElementById(ID);
    el.style.backgroundColor = "gold";
};
function bgColorChangeReg(ID) {
    var el = document.getElementById(ID);
    el.style.backgroundColor = "white";
};
function redColorText(ID) {
    var el = document.getElementById(ID);
    el.style.color = "red";
};
function removeFooter() {
    document.getElementById("footer").remove();
};