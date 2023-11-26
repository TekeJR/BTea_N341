/*
    Title: BTeaMidterm.js
    Author: Brendan Tea
    Purpose: Culmination of Javascript skills thus far
    Originally created on: 11/22/23
    Last modified on: 11/22/23
*/
// Many of the requirements are on the HTML file such as Req 4-8.
//Tabs UI
$(document).ready(function() {
    $('#tabs').tabs(); //Req 4: Use accordian or tabs widget

    $('#datepicker').datepicker(); //Req 5: Use date picker widget.
});

var $form = $('#form'); 
$('#outputArea').hide(); //Req 8: Output area that is blank until submit is pressed

let fNameError = true;
$form.on('submit', function(e){ //Req 9: Output area echos information entered in user information field when submitted.
    e.preventDefault();
    var fNameGet = $('input#fname').val();
    $('#OPname').append(fNameGet + '');
    var lNameGet = $('input#lname').val();
    $('#OPname').append(lNameGet);
    var emailGet = $('input#email').val();
    $('#OPemail').append(emailGet);
    var phoneGet = $('input#phone').val();
    $('#OPphone').append(phoneGet);
    var StrOneGet = $('input#strAddress1').val();
    $('#OPaddress').append(StrOneGet + '');
    var StrTwoGet = $('input#strAddress2').val();
    $('#OPaddress').append(StrTwoGet + '');
    var cityGet = $('input#city').val();
    $('#OPaddress').append(cityGet + '');
    var stateGet = $('input#state').val();
    $('#OPaddress').append(stateGet + '');
    var zipGet = $('input#zipCode').val();
    $('#OPaddress').append(zipGet);

    validateFirstName();
    $('#outputArea').show();
});

function validateFirstName() { //Req 11: usse jquery to validate at least one input field, use placeholder to demonstrate an acceptable input.
    let fnameValue = $('#fname').val();
    if (fnameValue == ""){
        fNameError = false;
        return false;
    } else {
        alert("Error");
    };
};

$('input').on({ //Req 12, 13: use at least one form method. Use the .on() method with at least one form event.
    focus: function() {
        $(this).css("background-color", "gold");
    },
    blur: function() {
        $(this).css("background-color", "white");
    }
});

