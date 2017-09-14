$(document).ready(function() {

  // Menu Label Interaction
  $('.navMenuLabel').delay(2000).fadeOut(600);

  $('.navMenuGraphic').mouseenter(function () {
    $('.navMenuLabel').stop().fadeIn(200);
  });

  $('.navMenuGraphic').mouseleave(function () {
    $('.navMenuLabel').stop().delay(800).fadeOut(200);
  })


  // Menu Open & Close Interaction
  $('.navMenuGraphic').click(function() {
    OpenNavBar()
  });

  $(window).keypress(function(e) {
    if (e.keyCode == 109) {
      OpenNavBar();
    } else if (e.keyCode == 77) {
      OpenNavBar();
    } else if (e.keyCode == 32) {
      OpenNavBar();
    }
  });

  function OpenNavBar() {
    $('.container').toggleClass('open');

    if ($('.container').hasClass('open')) {
      $('.topBar').removeClass('topBarOut');
      $('.topBar').css('width');
      $('.topBar').addClass('topBarIn');
    } else {
      $('.topBar').removeClass('topBarIn');
      $('.topBar').css('width');
      $('.topBar').addClass('topBarOut');
    };

    if ($('.container').hasClass('open')) {
      $('.middleBar').removeClass('middleBarOut');
      $('.middleBar').css('width');
      $('.middleBar').addClass('middleBarIn');
    } else {
      $('.middleBar').removeClass('middleBarIn');
      $('.middleBar').css('width');
      $('.middleBar').addClass('middleBarOut');
    };

    if ($('.container').hasClass('open')) {
      $('.bottomBar').removeClass('bottomBarOut');
      $('.bottomBar').css('width');
      $('.bottomBar').addClass('bottomBarIn');
    } else {
      $('.bottomBar').removeClass('bottomBarIn');
      $('.bottomBar').css('width');
      $('.bottomBar').addClass('bottomBarOut');
    };
  };

});
