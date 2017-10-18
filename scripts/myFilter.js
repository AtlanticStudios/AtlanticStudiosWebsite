$(document).ready(function() {

  $('#filterAll').click(function() {
    // $('.filterSlider').addClass('left');
    // $('.filterSlider').css('width');
    // $('.filterSlider').removeClass('middle');
    // $('.filterSlider').removeClass('right');

    $('.filterSlider').animate({left: 0},300);
  })

  $('#filterDocumentary').click(function() {
    // $('.filterSlider').addClass('middle');
    // $('.filterSlider').css('width');
    // $('.filterSlider').removeClass('left');
    // $('.filterSlider').removeClass('right');

    $('.filterSlider').animate({left: 140},300);
  })

  $('#filterAnimation').click(function() {
    // $('.filterSlider').addClass('right');
    // $('.filterSlider').css('width');
    // $('.filterSlider').removeClass('middle');
    // $('.filterSlider').removeClass('left');

    $('.filterSlider').animate({left: 280},300);
  })

});
