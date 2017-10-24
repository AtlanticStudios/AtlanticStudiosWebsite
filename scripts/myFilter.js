$(document).ready(function() {

  $('#filterAll').click(function() {
    // $('.filterSlider').addClass('left');
    // $('.filterSlider').css('width');
    // $('.filterSlider').removeClass('middle');
    // $('.filterSlider').removeClass('right');

    $('.filterSlider').animate({
      left: 0
    }, 250);

    $('.Animation').css('display', 'inline-block');
    $('.Documentary').css('display', 'inline-block');
    $('.Series').css('display', 'inline-block');
    $('#filterAll').find('p').css('color', '#f3194b');
    $('#filterDocumentary').find('p').css('color', '#1d1d1d');
    $('#filterAnimation').find('p').css('color', '#1d1d1d');
    $('#filterSeries').find('p').css('color', '#1d1d1d');

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
  });

  $('#filterDocumentary').click(function() {
    // $('.filterSlider').addClass('middle');
    // $('.filterSlider').css('width');
    // $('.filterSlider').removeClass('left');
    // $('.filterSlider').removeClass('right');

    $('.filterSlider').animate({
      left: 108
    }, 250);

    $('.Animation').css('display', 'none');
    $('.Documentary').css('display', 'inline-block');
    $('.Series').css('display', 'none');
    $('#filterAll').find('p').css('color', '#1d1d1d');
    $('#filterDocumentary').find('p').css('color', '#f3194b');
    $('#filterAnimation').find('p').css('color', '#1d1d1d');
    $('#filterSeries').find('p').css('color', '#1d1d1d');

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
  });

  $('#filterAnimation').click(function() {
    // $('.filterSlider').addClass('right');
    // $('.filterSlider').css('width');
    // $('.filterSlider').removeClass('middle');
    // $('.filterSlider').removeClass('left');

    $('.filterSlider').animate({
      left: 215
    }, 250);

    $('.Animation').css('display', 'inline-block');
    $('.Documentary').css('display', 'none');
    $('.Series').css('display', 'none');
    $('#filterAll').find('p').css('color', '#1d1d1d');
    $('#filterDocumentary').find('p').css('color', '#1d1d1d');
    $('#filterAnimation').find('p').css('color', '#f3194b')
    $('#filterSeries').find('p').css('color', '#1d1d1d');

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
  });

  $('#filterSeries').click(function() {
    // $('.filterSlider').addClass('right');
    // $('.filterSlider').css('width');
    // $('.filterSlider').removeClass('middle');
    // $('.filterSlider').removeClass('left');

    $('.filterSlider').animate({
      left: 290
    }, 250);

    $('.Series').css('display', 'inline-block');
    $('.Documentary').css('display', 'none');
    $('.Animation').css('display', 'none');
    $('#filterAll').find('p').css('color', '#1d1d1d');
    $('#filterDocumentary').find('p').css('color', '#1d1d1d');
    $('#filterAnimation').find('p').css('color', '#1d1d1d');
    $('#filterSeries').find('p').css('color', '#f3194b');

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
  });

});
