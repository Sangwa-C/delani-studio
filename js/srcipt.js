$(document).ready(function() {
  $("#description").click(function() {
    $("#description").hide();
    $("#desc").show();
  });
  $("#desc").click(function() {
    $("#desc").hide();
    $("#description").show();
  });
  $("#development").click(function() {
    $("#development").hide();
    $("#delpt").show();
    });
  $("#delpt").click(function() {
    $("#delpt").hide();
    $("#development").show();
    }); 
  $("#product").click(function() {
    $("#product").hide();
    $("#pro").show();
    });
  $("#pro").click(function() {
    $("#pro").hide();
    $("#product").show();
    });       


});

