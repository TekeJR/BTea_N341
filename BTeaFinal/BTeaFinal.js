/*
    Title: BTeaFinal.js
    Author: Brendan Tea
    Purpose: Culmination of Javascript skills
    Originally created on: 12/1/23
    Last modified on: 12/1/23
*/
//JQuery
$(document).ready(function(){
    $('#izaBtn').dblclick(function(){
        $('#iza').addClass("newStyle");//Req 10: Use jQuery to add class to existing page element
    });

    $('#footerBtn').click(function(){ //Req 9: use jQuery to remove or hide a page element.
        $('#footer').remove();
    });

    $('#gTonkLabel').html('Garlic Tonkatsu Ramen changed text: (Our Most Popular!)'); //Req 11: jQuery method to change page element's content

    $('#garlicRamen').hide();
    $('#GarlicObjBtn').click(function(){ //Req 13: Use a jQuery animation method.
        $('#garlicRamen').fadeIn();
    })

    $('input:text').on({ //Req 12: Use a jQuery event to produce visible results on the page when the user triggers the event.
        focus: function(){
            $(this).css("background-color", "gold");
        },
        blur: function(){
            $(this).css("background-color", "white");
        }
    });

    $('label').odd().css('text-decoration', 'underline').addClass('visible'); //Req 14: Demonstrate jQuery chaining.

});
 
//Setup functions
function output(ID, newMessage) {
    var elMessage = document.getElementById(ID);
    elMessage.innerHTML = newMessage;
};

//Arrays
const ramen = ["Veggie", " Miso", " Shio", " Tsukemen Chicken", " Tsukemen Tonkatsu"]; //Req 4: Create and use an array.
const eggs = [1, 2, 3, 4, 5];

function ArrayConcat(ID) { //Req 4: Create and use an array.
    ramen[2] = ramen[2].concat(" (Low Sodium Concat)",);
    var el = document.getElementById(ID); 
    el.innerHTML = ramen;
};

function listAddRamen(ID) { //Req 4: Create and use an array.
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
        this.eggs++; 
        return "New Egg Amount (adding 1 egg): " + this.eggs; //Req 18: Use the keyword this.
    },
    deleteEgg: function() {
        this.eggs--;
        return "New Egg Amount (delete 1 egg): " + this.eggs; //Req 18: Use the keyword this.
    },
    eggMath: function() {
        this.eggs = Math.pow(this.eggs, 4); //Req 15: Use a Math Object method.
        return "Powered Egg Amount (Pow operator): " + this.eggs; //Req 18: Use the keyword this.
    },
};

output("garlicRamen", garTonk.details());
output("garlicPlusEgg", garTonk.addEgg());
output("garlicEggMath", garTonk.eggMath());
output("garlicMinusEgg", garTonk.deleteEgg());

//Comparison and Operators
function andOP() { //Req 7: Demonstrate the use of logical operators.
    if (garTonk.edona || garTonk.moyashi) {
        return "OR Logical Operator result: There is either edona or moyashi in the ramen.";
    } else {
        return "Error";
    }
};

output("OR", andOP());

function ifElseConstruct() {
    if (eggs[1]<eggs[3]) { //Req 5 & 6: Use if/else construct or switch statement Use comparison operator.
        return "If-Else construct result: Eggs[3] is bigger than Eggs[1].";
    } else {
        return "If-Else construct result: Eggs[1] is bigger than Eggs[3]."
    }
};

function equalTo() { 
    if (eggs[2]!==eggs[4]) { //Req 5 & 6: Use if/else construct or switch statement Use comparison operator.
        return "Equal to operator result: eggs[2] is NOT equal to eggs[4].";
    } else {
        return "Error";
    }
};

output("ifElse", ifElseConstruct());
output("equalto", equalTo());

//Parsing
var elParse = document.getElementById("Parse");

function parseGar(numGarlic) {
    numGarlic = parseInt(numGarlic); // Req 8: Use ParseInt to convert a string to an integer.
    elParse.textContent = "ParseInt garlic result: " + numGarlic + " \
    initial garlic scoops" + " + 5 additional garlic scoops = " + (numGarlic + 5) + " total garlic scoops.";
};

parseGar("2");

//Date Function
function displayTime() {
    const d = new Date(); //Req 16: Use a Date Object method.
    return "Date Object: " + d;
};
output("time", displayTime());

//Day Function
function daySwitch() { //Req 5 & 6: Use if/else construct or switch statement Use comparison operator.
 
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
function popIzaItem() { 
    const izakayaItemsSelection = document.getElementsByClassName("izafood");
    izakayaItemsSelection[0].innerHTML = "Karaage (#1 Popular Izakaya Item!)";
    izakayaItemsSelection[1].innerHTML = "Pork Gyoza (#2 Popular Izakaya Item!)";
};



//Events
function bgColorChange(ID) { 
    var el = document.getElementById(ID); 
    el.style.backgroundColor = "gold";
};

function logicBorder(ID) { 
    var el = document.getElementById(ID);
    el.style.borderStyle = "solid";
};

function logicBorderNone(ID) { 
    var el = document.getElementById(ID);
    el.style.borderStyle = "none";
};

function bgColorChangeReg(ID) { 
    var el = document.getElementById(ID); 
    el.style.backgroundColor = "white";
};

function redColorText(ID) {
    var el = document.getElementById(ID); 
    el.style.color = "red";
};

function bgBodyColorChange(ID) { 
    var el = document.getElementById(ID);
    el.style.backgroundColor = "rgb(24, 3, 3)"
};

function bgBodyColorChangeReg(ID) {
    var el = document.getElementById(ID);
    el.style.backgroundColor = "black"
};

function leavePage() { 
    return;
};



var logicMouseOver = document.getElementById("logic"); 
logicMouseOver.addEventListener("mouseover", function() { 
    logicBorder("logic"); 
});

logicMouseOver.addEventListener("mouseout", function() { 
    logicBorderNone("logic");
});

var submitConfirmation = document.getElementById("subreminder"); 
submitConfirmation.addEventListener("click", function() {
    reminderClickEvent(this);
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
bgBody.addEventListener("keydown", function() { 
    bgBodyColorChange("body");
});

bgBody.addEventListener("keyup", function() { 
    bgBodyColorChangeReg("body");
});

var message = document.getElementById("form"); 
message.addEventListener("submit", function() { //Req 31: Create form event that produces visible result on page (onsubmit event).
        alert("Your order has been submitted! Thank you!");
});