$(document).ready(function() {

  var VimeoEmbed = '<iframe width="1920" height="1080" src="https://www.youtube.com/embed/ZQoN3vIDJUA" frameborder="0" allowfullscreen></iframe>'

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

    document.getElementById('video').pause();
  };

  function CloseModal() {
    var window = $('.modalWindow');
    window.stop();
    // window.animate({height: '1'}, 200);
    window.animate({top: '10%', height: '0'}, 200, function() {window.hide()});

    $('.modalBackground').delay(300).fadeOut(200);

    $('.modalEmbed').empty();

    document.getElementById('video').play();
  };

});
