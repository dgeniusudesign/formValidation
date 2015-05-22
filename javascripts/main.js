function showValues() {
  var fN = $("#firstNameText").val();
  var lN = $("#lastNameText").val();
  var e = $("#emailText").val();
  var p = $("#phoneText").val();
  var d = $("#dateOfBirth").val();
  var a1 = $("#addLine1Text").val();
  var a2 = $("#addLine2Text").val();
  var c = $("#cityText").val();
  var z = $("#zipcodeText").val();
  var s = $("#stateText").val();
  var n = $("#countryText").val();
  $("#result").text(fN+lN+e+p+d+a1+a2+c+z+s+n);
}

$(document).ready(function() {
  /*
  All the code below has been commented because a single function can be used to implement all this
  repeated functionalities.
  When the focus moves away from the First Name Text Box, all validations are done via jQuery
  $("#firstNameText").on('focusout', function() {
    //If the value is empty, an error is displayed stating that text box cannot be empty
    if( $(this).val() == "" ) {
      $("#firstNameErr").text("First Name cannot be empty!");
    }
    //If the text box is not empty, then the error message is set to nothing and the words being typed
    //are automatically converted to Initcap
    //Also a regex is used to check if the name contains only alphabets - if it contains something else,
    //then an error is displayed
    else {
      $("#firstNameErr").text("");
      var re = /^[a-zA-Z\s]+$/;
      if(!re.test($("#firstNameText").val())) {
        $("#firstNameErr").text("Name can contain only alphabets!");
      } else {
        $("#firstNameErr").text("");
      }
      $("#firstNameText").addClass("initCap");
    }
  });
  //Same as above
  $("#lastNameText").on('focusout', function() {
    if( $(this).val() == "" ) {
      $("#lastNameErr").text("Last Name cannot be empty!");
    }
    else {
      $("#lastNameErr").text("");
      var re = /^[a-zA-Z\s]+$/;
      if(!re.test($("#lastNameText").val())) {
        $("#lastNameErr").text("Name can contain only alphabets!");
      } else {
        $("#lastNameErr").text("");
      }
      $("#lastNameText").addClass("initCap");
    }
  });
  A function to capitalize the first letter - Good find
  String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }
  Same as first name
  $("#stateText").on('focusout', function() {
    //If the value is empty, an error is displayed stating that text box cannot be empty
    if( $(this).val() == "" ) {
      $("#stateErr").text("State cannot be empty!");
    }
    //If the text box is not empty, then the error message is set to nothing and the words being typed
    //are automatically converted to Initcap
    //Also a regex is used to check if the name contains only alphabets - if it contains something else,
    //then an error is displayed
    else {
      $("#stateErr").text("");
      var re = /^[a-zA-Z\s]+$/;
      if(!re.test($("#stateText").val())) {
        $("#stateErr").text("Entered State is invalid. State values can contain only alphabets!");
      } else {
        $("#stateErr").text("");
      }
      $("#stateText").addClass("initCap");
    }
  });
  Same as first name
  $("#cityText").on('focusout', function() {
    //If the value is empty, an error is displayed stating that text box cannot be empty
    if( $(this).val() == "" ) {
      $("#cityErr").text("City cannot be empty!");
    }
    //If the text box is not empty, then the error message is set to nothing and the words being typed
    //are automatically converted to Initcap
    //Also a regex is used to check if the name contains only alphabets - if it contains something else,
    //then an error is displayed
    else {
      $("#cityErr").text("");
      var re = /^[a-zA-Z\s]+$/;
      if(!re.test($("#cityText").val())) {
        $("#cityErr").text("Entered City is invalid. City values can contain only alphabets!");
      } else {
        $("#cityErr").text("");
      }
      $("#cityText").addClass("initCap");
    }
  });
  Same as first name
  $("#countryText").on('focusout', function() {
    //If the value is empty, an error is displayed stating that text box cannot be empty
    if( $(this).val() == "" ) {
      $("#countryErr").text("Country cannot be empty!");
    }
    //If the text box is not empty, then the error message is set to nothing and the words being typed
    //are automatically converted to Initcap
    //Also a regex is used to check if the name contains only alphabets - if it contains something else,
    //then an error is displayed
    else {
      $("#countryErr").text("");
      var re = /^[a-zA-Z\s]+$/;
      if(!re.test($("#countryText").val())) {
        $("#countryErr").text("Entered Country is invalid. Country values can contain only alphabets!");
      } else {
        $("#countryErr").text("");
      }
      $("#countryText").addClass("initCap");
    }
  });
  */
  $(".validImg").hide();
  $(".invalidImg").hide();
  // A single function that takes two arguments - one to identify the id values used in the HTML and the other is the error message to print the values.
  function validateCommon(str, msg) {
    var strTxt = "#"+str+"Text";
    var strErr = "#"+str+"Err";
    $(strTxt).on('focusout', function() {
      //If the value is empty, an error is displayed stating that text box cannot be empty
      if( $(strTxt).val() == "" ) {
        $(strErr).prev().prev().hide(); //Hiding any previous displayed valid icon
        $(strErr).text(msg + " cannot be empty!");
        $(strErr).prev().show(); //Showing the invalid icon
        $(strTxt).addClass("redBorder");
        $(strTxt).effect("shake",5);
      }
      //If the text box is not empty, then the error message is set to nothing and the words being typed
      //are automatically converted to Initcap
      //Also a regex is used to check if the name contains only alphabets - if it contains something else,
      //then an error is displayed
      else {
        $(strErr).prev().hide(); // Hiding any previous displayed invalid icon
        $(strErr).text("");
        var re = /^[a-zA-Z\s]+$/;
        if(!re.test($(strTxt).val())) {
          $(strErr).prev().prev().hide(); //Hiding any previous displayed valid icon
          $(strErr).text("Entered "+ msg + " is invalid. "+ msg +" values can contain only alphabets!");
          $(strErr).prev().show(); // Displaying the invalid icon
          $(strTxt).addClass("redBorder");
          $(strTxt).effect("shake",5);
        } else {
          $(strErr).prev().hide(); // Hiding any previous displayed invalid icon
          $(strErr).text("");
          $(strErr).prev().prev().show(); // Showing valid icon
          $(strTxt).removeClass("redBorder");
        }
        $(strTxt).addClass("initCap");
      }
    });
  }
  validateCommon("country", "Country");
  validateCommon("city", "City");
  validateCommon("state", "State");
  validateCommon("firstName", "First Name");
  validateCommon("lastName", "Last Name");

  //Similar concept, but needs a regex, so doing it seperately
  $("#emailText").on('focusout', function() {
    if( $(this).val() == "" ) {
      $("#emailErr").prev().prev().hide(); //Hiding any previous displayed valid icon
      $("#emailErr").text("Email cannot be empty!");
      $("#emailErr").prev().show();
      $("#emailText").addClass("redBorder");
      $("#emailText").effect("shake",5);
    }
    //If the email field is not empty, then a regex is used to validate the email ID and if it is not
    //valid an error message is displayed
    else {
      $("#emailErr").text("");
      var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;;
      // console.log($("#emailText").val());
      // console.log(re.test($("#emailText").val()));
      if(!re.test($("#emailText").val())) {
        $("#emailErr").prev().prev().hide(); //Hiding any previous displayed valid icon
        $("#emailErr").text("Entered Email isn't valid! Please enter a valid Email ID!");
        $("#emailErr").prev().show();
        $("#emailText").addClass("redBorder");
        $("#emailText").effect("shake",5);
      } else {
        $("#emailErr").prev().hide(); // Hiding any previous displayed invalid icon
        $("#emailErr").text("");
        $("#emailErr").prev().prev().show();
        $("#emailText").removeClass("redBorder");
      }
    }
  });
  //Same as above
  $("#phoneText").on('focusout', function() {
    if( $(this).val() == "" ) {
      $("#phoneErr").prev().prev().hide(); //Hiding any previous displayed valid icon
      $("#phoneErr").text("Phone Number cannot be empty!");
      $("#phoneErr").prev().show();
      $("#phoneText").addClass("redBorder");
      $("#phoneText").effect("shake",5);
    }
    else {
      $("#phoneErr").prev().hide(); // Hiding any previous displayed invalid icon
      $("#phoneErr").text("");
      var re = /^\d{10}$/;
      // console.log($("#phoneErr").val());
      // console.log(re.test($("#phoneText").val()));
      if(!re.test($("#phoneText").val())) {
        $("#phoneErr").prev().prev().hide(); //Hiding any previous displayed valid icon
        $("#phoneErr").text("Entered Phone Number isn't valid! Please enter a valid phone number");
        $("#phoneErr").prev().show();
        $("#phoneText").addClass("redBorder");
        $("#phoneText").effect("shake",5);
      } else {
        $("#phoneErr").prev().hide(); // Hiding any previous displayed invalid icon
        $("#phoneErr").text("");
        $("#phoneErr").prev().prev().show();
        $("#phoneText").removeClass("redBorder");
      }
    }
  });
  //Date of birth validation - check to see if the value is empty and throw an error if it is, else make
  //the error as nothing
  $("#dateOfBirth").on('focusout', function() {
    if( $(this).val() == "" ) {
      $("#dateErr").prev().prev().hide(); //Hiding any previous displayed valid icon
      $("#dateErr").text("Please select a date value!");
      $("#dateErr").prev().show();
      $("#dateOfBirth").addClass("redBorder");
      $("#dateOfBirth").effect("shake",5);
    } else {
      $("#dateErr").prev().hide(); // Hiding any previous displayed invalid icon
      $("#dateErr").text("");
      $("#dateErr").prev().prev().show();
      $("#dateOfBirth").removeClass("redBorder");
    }
  });
  //Address validation is similar to how the names are handled except that the regex allows numbers and
  //special characters
  $("#addLine1Text").on('focusout', function() {
    //If the value is empty, an error is displayed stating that text box cannot be empty
    if( $(this).val() == "" ) {
      $("#addLine1Err").prev().prev().hide(); //Hiding any previous displayed valid icon
      $("#addLine1Err").text("Address cannot be empty!");
      $("#addLine1Err").prev().show();
      $("#addLine1Text").addClass("redBorder");
      $("#addLine1Text").effect("shake",5);
    }
    //If the text box is not empty, then the error message is set to nothing and the words being typed
    //are automatically converted to Initcap
    //Also a regex is used to check if the name contains only alphabets - if it contains something else,
    //then an error is displayed
    else {
      $("#addLine1Err").prev().hide(); // Hiding any previous displayed invalid icon
      $("#addLine1Err").text("");
      var re = /^[a-zA-Z0-9\s]+$/;
      if(!re.test($("#addLine1Text").val())) {
        $("#addLine1Err").prev().prev().hide(); //Hiding any previous displayed valid icon
        $("#addLine1Err").text("Entered address is invalid. Please enter a valid address!");
        $("#addLine1Err").prev().show();
        $("#addLine1Text").addClass("redBorder");
        $("#addLine1Text").effect("shake",5);
      } else {
        $("#addLine1Err").prev().hide(); // Hiding any previous displayed invalid icon
        $("#addLine1Err").text("");
        $("#addLine1Err").prev().prev().show();
        $("#addLine1Text").removeClass("redBorder");
      }
      $("#addLine1Text").addClass("initCap");
    }
  });
  //Same as above - Address Line 2 validation. Regex checks for only numbers
  $("#addLine2Text").on('focusout', function() {
    //A regex is used to check if the input contains only numbers or just empty string
      var re = /^[0-9\s]+$|^$/;
      if(!re.test($("#addLine2Text").val())) {
        $("#addLine2Err").prev().prev().hide(); //Hiding any previous displayed valid icon
        $("#addLine2Err").text("Entered value is invalid. Please enter a valid Apartment/Suite number!");
        $("#addLine2Err").prev().show();
        $("#addLine2Text").addClass("redBorder");
        $("#addLine2Text").effect("shake",5);
      } else {
        $("#addLine2Err").prev().hide(); // Hiding any previous displayed invalid icon
        $("#addLine2Err").text("");
        $("#addLine2Err").prev().prev().show();
        $("#addLine2Text").removeClass("redBorder");
      }
  });
  //Similar to phone number validation except that the regex is different as it doesn't restrict
  //the number of digits(yet)
  $("#zipcodeText").on('focusout', function() {
    if( $(this).val() == "" ) {
      $("#zipErr").prev().prev().hide(); //Hiding any previous displayed valid icon
      $("#zipErr").text("Zipcode cannot be empty!");
      $("#zipErr").prev().show();
      $("#zipcodeText").addClass("redBorder");
      $("#zipcodeText").effect("shake",5);
    }
    else {
      $("#zipErr").text("");
      var re = /^[0-9]+$/;
      if(!re.test($("#zipcodeText").val())) {
        $("#zipErr").prev().prev().hide(); //Hiding any previous displayed valid icon
        $("#zipErr").text("Entered zipcode is invalid! Zipcode value can contain only numbers!");
        $("#zipErr").prev().show();
        $("#zipcodeText").addClass("redBorder");
        $("#zipcodeText").effect("shake",5);
      } else {
        $("#zipErr").prev().hide(); // Hiding any previous displayed invalid icon
        $("#zipErr").text("");
        $("#zipErr").prev().prev().show();
        $("#zipcodeText").removeClass("redBorder");
      }
    }
  });
});