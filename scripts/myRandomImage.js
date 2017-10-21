$(document).ready(function() {

  var backgroundImages = ['ChurchMilitant.png', 'CityOfFuture.png', 'Corals.png', 'Plantation.png', 'Tornado.png', 'OJ.png', 'Obama.png', 'Roxane.png', 'YouAreHere.png'];

  $('.coverImage').css('background-image', RandomBackgroundImage(backgroundImages));

  function RandomBackgroundImage(imageArray) {
    var number = Math.floor(Math.random() * imageArray.length);
    var image = imageArray[number];
    // var url = 'url("images/backgrounds/texture.png"), url(/images/backgrounds/' + image + ')'
    var url = 'url(/images/backgrounds/' + image + ')'

    return url;
  }

});
