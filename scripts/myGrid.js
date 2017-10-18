$(document).ready(function() {

  // Mobile Listeners
  var windowWidth = $(window).width();
  console.log(windowWidth);

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

  if (windowWidth > 600) {
    $('.grid-item').mouseover(function() {
      $(this).find('.projectLabel').fadeIn(300);
      $(this).find('.projectCover').css('opacity', 0.5);
    });
    $('.grid-item').mouseleave(function() {
      $(this).find('.projectLabel').stop().hide();
      $(this).find('.projectCover').css('opacity', 1);
    });
  } else {
    $('.grid-item').on('touchstart', function() {
      $(this).find('.projectLabel').fadeIn(300);
      // $(this).find('.projectCover').css('opacity', 0.5);
    });
    $('.grid-item').on('touchend', function() {
      $(this).find('.projectLabel').delay(3000).fadeOut(300);
      // $(this).find('.projectCover').delay(1000).css('opacity', 1);
    });
  }

});
