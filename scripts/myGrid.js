$(document).ready(function() {

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

  $('.grid-item').mouseover(function() {
    $(this).find('.projectLabel').fadeIn(300);
    $(this).find('.projectCover').css('opacity', 0.5);
  });
  $('.grid-item').mouseleave(function() {
    $(this).find('.projectLabel').stop().hide();
    $(this).find('.projectCover').css('opacity', 1);
  });

  $('.grid-item').on('touchstart', function() {
    $(this).find('.projectLabel').fadeIn(300);
    $(this).find('.projectCover').css('opacity', 0.5);
  });

});
