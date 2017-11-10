$(document).ready(function() {

  var windowWidth = $(window).width();

  if (windowWidth < 900) {

    $(window).ready(function() {
      $('.newsReader').hide();
      var hashID = "#thumb" + (window.location.hash).substring(1);
      $(hashID).find('.newsReader').show();
      $(hashID).find('.break').show();
      $(hashID).ScrollTo();
    });

    // window.onhashchange = function() {
    //   var hashID = "#thumb" + (window.location.hash).substring(1);
    //   // $('.newsReader').hide();
    //   // $('.storyThumb').css('box-shadow', 'initial');
    //   $(hashID).find('.newsReader').toggle();
    //   $(hashID).click(function() {
    //     $(this).find('.newsReader').toggle();
    //   })
    //   // $(this).css('box-shadow', 'inset 0 0 0 3px #000000');
    // };

    $('.storyThumb').click(function() {
      $(this).find('.newsReader').toggle();
      $(this).find('.break').toggle();
    });


    // $('.storyThumb').on('touchstart', function() {
    //   $(this).css('box-shadow', 'inset 0 0 0 3px #000000');
    // });
    // $('.storyThumb').on('touchend', function() {
    //   $('.storyThumb').css('box-shadow', 'initial');
    // });

  } else {

    var clicked = false;

    $(window).ready(function() {
      var hashID = "#thumb" + (window.location.hash).substring(1);

      // console.log(hashID);

      $('.storyThumb').css('box-shadow', 'initial');

      $('.newsTab').find('.newsReader').remove();

      postContent = $(hashID).find('.newsReader').clone();
      $('.newsTab').append(postContent);
      postContent.show();

      // if (hashID !== '#thumb') {
      //   $('.newsTabHeader').hide();
      // }

      $(hashID).css('box-shadow', 'inset 0 0 0 3px #000000');
    });

    window.onhashchange = function() {
      var hashID = "#thumb" + (window.location.hash).substring(1);
      // console.log(hashID);

      $('.storyThumb').css('box-shadow', 'initial');

      $('.newsTab').find('.newsReader').remove();

      postContent = $(hashID).find('.newsReader').clone();
      $('.newsTab').append(postContent);
      $('.newsTabHeader').hide();
      postContent.show();

      $(hashID).css('box-shadow', 'inset 0 0 0 3px #000000');
    };

  }

});
