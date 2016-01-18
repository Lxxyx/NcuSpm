$(document).ready(function() {
  $('.topIcon').hover(function() {
    $(this).children('ul').css("visibility", "visible");
  }, function() {
    $('.topIcon ul').css("visibility", "hidden")
  });
});
