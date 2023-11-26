/*
    Title: BTeaMidterm.js
    Author: Brendan Tea
    Purpose: Culmination of Javascript skills thus far
    Originally created on: 11/22/23
    Last modified on: 11/22/23
*/
//Tabs UI
$(document).ready(function() {
    $('#tabs').tabs(); 

    $('#datepicker').datepicker();
});

var $form = $('#form');
$('#outputArea').hide();

let fNameError = true;
$form.on('submit', function(e){ 
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

function validateFirstName() {
    let fnameValue = $('#fname').val();
    if (fnameValue == ""){
        fNameError = false;
        return false;
    } else {
        alert("Error");
    };
};


