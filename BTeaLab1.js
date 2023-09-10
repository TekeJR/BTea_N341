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
output("footer", "Thank you for ordering from us!")
output("GarlicTonkDesc", "Our most popular ramen! Customers are satisfied everytime!")