function showValues() {
  
}
$(document).ready(function() {
  $("#firstNameText").on('focusout', function() {
    if( $(this).val() == "" ) {
      $("#firstNameErr").text("First Name cannot be empty!");
    }
    else {
      $("#firstNameErr").text("");
    }
  });
});