$(document).foundation();

var barClicked = false;
// $('#small-menu').hide();

$('#menu-bar .menu-list.visible-for-small-only li a').click( function() {

  if (barClicked) {
    $('#small-menu').slideUp();
    barClicked = false;
  }
  else {
    $('#small-menu').slideDown();
    barClicked = true;
  }

})
