function showValues() {
  var fN = $("#firstNameText").val();
  var lN = $("#lastNameText").val();
  $("#result").text(fN+lN)
}

$(document).ready(function() {
  $("#firstNameText").on('focusout', function() {
    if( $(this).val() == "" ) {
      $("#firstNameErr").text("First Name cannot be empty!");
    }
    else {
      $("#firstNameErr").text("");
      $("#firstNameText").addClass("initCap");
    }
  });
  $("#lastNameText").on('focusout', function() {
    if( $(this).val() == "" ) {
      $("#lastNameErr").text("Last Name cannot be empty!");
    }
    else {
      $("#lastNameErr").text("");
      $("#lastNameText").addClass("initCap");
    }
  });
  $("#emailText").on('focusout', function() {
    if( $(this).val() == "" ) {
      $("#emailErr").text("Email cannot be empty!");
    }
    else {
      $("#emailErr").text("");
      var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;;
      console.log($("#emailText").val());
      console.log(re.test($("#emailText").val()));
      if(!re.test($("#emailText").val())) {
        $("#emailErr").text("Email isn't valid! Enter a proper Email ID!");
      } else {
        $("#emailErr").text("");
      }
    }
  });
  $("#phoneText").on('focusout', function() {
    if( $(this).val() == "" ) {
      $("#phoneErr").text("Phone cannot be empty!");
    }
    else {
      $("#phoneErr").text("");
      var re = /^\d{10}$/;
      console.log($("#phoneErr").val());
      console.log(re.test($("#phoneText").val()));
      if(!re.test($("#phoneText").val())) {
        $("#phoneErr").text("Phone Number isn't valid! Enter a proper number");
      } else {
        $("#phoneErr").text("");
      }
    }
  });
});