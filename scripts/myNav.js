$(document).ready(function() {

  // Mobile Listeners

  var windowWidth = $(window).width();
  console.log(windowWidth);

  // Menu Label Interaction

  $('.navMenuLabel').delay(2000).fadeOut(600);

  $('.navMenuGraphic').mouseenter(function() {
    $('.navMenuLabel').stop().fadeIn(200);
  });

  $('.navMenuGraphic').mouseleave(function() {
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
    // all animations rely on the open class for .container
    $('.container').toggleClass('open');

    // swap out text hint for menu button
    if ($('.container').hasClass('open')) {
      $('.navMenuLabel').empty().append('Hide');
    } else {
      $('.navMenuLabel').empty().append('Show')
    }


    // Here are all the triggers for the menu button animation:

    // this if/else statement moves the button up and down on the page
    if (windowWidth > 900) {
      if ($('.container').hasClass('open')) {
        $('.navMenuButton').removeClass('MenuButtonUp');
        $('.navMenuButton').css('width');
        $('.navMenuButton').addClass('MenuButtonDown');
      } else {
        $('.navMenuButton').removeClass('MenuButtonDown');
        $('.navMenuButton').css('width');
        $('.navMenuButton').addClass('MenuButtonUp');
      }
    } else {
      $('.navMenuButton').removeClass('MenuButtonDown');
      // $('.navMenuButton').css('width');
      $('.navMenuButton').removeClass('MenuButtonUp');
    };
    // this one animates the topBar
    if ($('.container').hasClass('open')) {
      $('.topBar').removeClass('topBarOut');
      $('.topBar').css('width');
      $('.topBar').addClass('topBarIn');
    } else {
      $('.topBar').removeClass('topBarIn');
      $('.topBar').css('width');
      $('.topBar').addClass('topBarOut');
    };
    // this one animates the middleBar
    if ($('.container').hasClass('open')) {
      $('.middleBar').removeClass('middleBarOut');
      $('.middleBar').css('width');
      $('.middleBar').addClass('middleBarIn');
    } else {
      $('.middleBar').removeClass('middleBarIn');
      $('.middleBar').css('width');
      $('.middleBar').addClass('middleBarOut');
    };
    // this one animates the bottomBar
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
