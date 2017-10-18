$(document).ready(function() {

  $('#filterAll').click(function() {
    // $('.filterSlider').addClass('left');
    // $('.filterSlider').css('width');
    // $('.filterSlider').removeClass('middle');
    // $('.filterSlider').removeClass('right');

    $('.filterSlider').animate({left: 0},300);

    $('.Animation').css('display', 'inline-block');
    $('.Documentary').css('display', 'inline-block');
    $('#filterAll').find('p').css('color', '#e50f41');
    $('#filterDocumentary').find('p').css('color', '#1d1d1d');
    $('#filterAnimation').find('p').css('color', '#1d1d1d');

    $('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: 150,
      // gutter: 10
      isAnimated: true,
      animationOptions: {
        duration: 200,
        easing: 'swing',
        queue: false
      }
    });
  })

  $('#filterDocumentary').click(function() {
    // $('.filterSlider').addClass('middle');
    // $('.filterSlider').css('width');
    // $('.filterSlider').removeClass('left');
    // $('.filterSlider').removeClass('right');

    $('.filterSlider').animate({left: 140},300);

    $('.Animation').css('display', 'none');
    $('.Documentary').css('display', 'inline-block');
    $('#filterAll').find('p').css('color', '#1d1d1d');
    $('#filterDocumentary').find('p').css('color', '#e50f41');
    $('#filterAnimation').find('p').css('color', '#1d1d1d')

    $('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: 150,
      // gutter: 10
      isAnimated: true,
      animationOptions: {
        duration: 200,
        easing: 'swing',
        queue: false
      }
    });
  })

  $('#filterAnimation').click(function() {
    // $('.filterSlider').addClass('right');
    // $('.filterSlider').css('width');
    // $('.filterSlider').removeClass('middle');
    // $('.filterSlider').removeClass('left');

    $('.filterSlider').animate({left: 280},300);

    $('.Animation').css('display', 'inline-block');
    $('.Documentary').css('display', 'none');
    $('#filterAll').find('p').css('color', '#1d1d1d');
    $('#filterDocumentary').find('p').css('color', '#1d1d1d');
    $('#filterAnimation').find('p').css('color', '#e50f41')

    $('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: 150,
      // gutter: 10
      isAnimated: true,
      animationOptions: {
        duration: 200,
        easing: 'swing',
        queue: false
      }
    });
  })

});
