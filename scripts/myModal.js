$(document).ready(function() {

  var VimeoEmbed = '<iframe src="https://player.vimeo.com/video/152765945" width="1920" height="1080" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="https://vimeo.com/152765945">The Atlantic reel 2016</a> from <a href="https://vimeo.com/atlanticvideo">The Atlantic</a> on <a href="https://vimeo.com">Vimeo</a>.</p>'

  // Event Listeners
  $('.playSymbol').click(function() {
    OpenModal();
  });
  $('.modalBackground').click(function() {
    CloseModal();
  });
  $(window).keypress(function(e) {
    if (e.keyCode == 120) {
      CloseModal();
    } else if (e.keyCode == 88) {
      CloseModal()
    }
  });

  // Modal Operations
  function OpenModal() {
    $('.modalBackground').fadeIn(200);

    var window = $('.modalWindow');
    window.show();
    //window.delay(200).animate({width: '80vw'}, 200);
    // window.animate({width: '80vw'}, 200);
    window.delay(200).animate({top: '50%', height: '45vw'}, 200);

    $('.modalEmbed').append(VimeoEmbed);
  };

  function CloseModal() {
    var window = $('.modalWindow');
    window.stop();
    // window.animate({height: '1'}, 200);
    window.animate({top: '10%', height: '0'}, 200, function() {window.hide()});

    $('.modalBackground').delay(300).fadeOut(200);

    $('.modalEmbed').empty();
  };

});
