/*
    Title: BTeaMidterm.js
    Author: Brendan Tea
    Purpose: Culmination of Javascript skills thus far
    Originally created on: 10/15/23
    Last modified on: 10/22/23
*/

$(function(){
//Req 5 & 8: Demonstrate jQuery selection of multiple page elements by tag or class name and change it. 
$(".izafood").css('background-color', 'gold');

//Req 6, 8, 16: Select by id and change it with jQuery. Use .css to change color of page element.
$('#ramen').css('background-color', 'lightgrey');

//Req 7, 8, 11 & 15: Demonstrate a filtered selection and change it. Use chaining on a single selection. Use 2 methods [ .attr() .removeAttr() .addClass() .removeClass() ] to change the attribute values of at least two different page elements.
$('label').odd().css('text-decoration', 'underline').addClass('visible')

//Req 9, 10, 17: Use the .each() method to loop thought a jQuery selection of mulitple page elements. Use $(this) inside .each() to create visible results on the page. Use .on for 3 events.
$("#izaPopular").on('click', function(){
    $('.izafood').each(function(){
        alert($(this).text())
    });
});

//Req 12: Use .html() to get or set page content
$('#gTonkLabel').html('Garlic Tonkatsu Ramen changed text: (Our Most Popular!)');

//Req 13: Use .text() to get or set page content
$('#GarlicTonkDesc').text("Changed text: <b>A rich ramen made with pork and chicken bone broth. Served traditionally with garlic, pork belly, seaweed, moyashi and green onions. You can add chili flakes as well!</b>");

//Req 14, 17: Add at least 1 element to the page using .before, .append, .prepend, .append(), or .after. Use .on for 3 events.
$('#garTonkSale').on('click', function(){
    $('#gTonkLabel').append(' <b>Appended Text: 20% OFF!</b>');
});

//Req 15: 
$('#message').removeClass('visible');

//Req 17, 19: Use .on for 3 events. Use at least 3 jquery effects to change the page (used 2 times here).  
$('h1').on({
    mouseenter: function(){
        $('h1').fadeOut();
    },
    mouseleave: function(){
        $('h1').fadeIn();
    }
});

//Req 18: 
var body = $("body");
var div = $('div');
var label = $('label');
var p = $('p');

$(body).click(function(){
    console.log("body clicked");
});

$(div).click(function(){
    console.log("div clicked");
});

$(label).click(function(){
    console.log("label clicked");
});

$(p).click(function(){
    event.stopPropagation();
    console.log("p clicked");
    
});

//Req 19: Use at least 3 jquery effects to change the page.
$('h2').hover(function(){
        $('h2').slideUp();
    },
    function(){
        $('h2').slideDown();
});

//Req 20: Use 2 jquery methods to traverse DOM to access parent or sibling node of a previous selection, change it.
$('#GarlicTonkDesc').parent().css({"border": "2px solid red"});

$("#iza").children().css({"text-decoration-line": "underline", "text-decoration-style": "dashed", "text-decoration-color": "red"});

//Req 21: Use 2 jquery selectors the use form element selectors. Make changes or send values to an output area.
$(":submit").css("background-color", "red");

$(":text").css("background-color", "gold")

//Req 22: Remove an element from the page. 
$("#delFooter").click(function(){
    $("#footer").remove();
});

});


