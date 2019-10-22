$(document).ready(function() {
  $("#js-front-button").click(function() {
    $("#js-back").toggle();
    $("#js-front").toggle();
  });

  $("#js-back-link").click(function() {
    $("#js-front").toggle();
    $("#js-back").toggle();
  });
});
