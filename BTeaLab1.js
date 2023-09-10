/*
    Title: BTeaLab1.js
    Author: Brendan Tea
    Purpose: Using expressions, functions, and objects. 
    Originally created on: 8/27/23
    Last modified on: 8/27/23
*/
var  strMessage = "";
var intNum = 0;
var bolGluten = true;

function output(ID, newMessage) {
    var elMessage = document.getElementById(ID);
    elMessage.innerHTML = newMessage;
}

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