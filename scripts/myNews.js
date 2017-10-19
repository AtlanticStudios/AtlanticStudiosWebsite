$(document).ready(function() {

  var windowWidth = $(window).width();

  if (windowWidth < 1100) {

    $('.storyThumb').click(function() {
      // $('.newsReader').toggle();
      // $('.storyThumb').css('box-shadow', 'initial');
      $(this).find('.newsReader').toggle();
      // $(this).css('box-shadow', 'inset 0 0 0 3px #e50f41');
    });

    $('.storyThumb').on('touchstart', function() {

      $(this).css('box-shadow', 'inset 0 0 0 3px #e50f41');
    });
    $('.storyThumb').on('touchend', function() {
      $('.storyThumb').css('box-shadow', 'initial');
    });

  } else {

    var clicked = false;

    $('.storyThumb').click(function() {
      $('.storyThumb').css('box-shadow', 'initial');

      $('.newsTab').find('.newsReader').remove();

      postContent = $(this).find('.newsReader').clone();
      $('.newsTab').append(postContent);
      $('.newsTabHeader').hide();
      postContent.show();

      $(this).css('box-shadow', 'inset 0 0 0 3px #e50f41');
      clicked = true;
    });

  }

});
