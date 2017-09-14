$(document).ready(function() {

  var backgroundImages = ['ChurchMilitant.png', 'CityOfFuture.png', 'Corals.png', 'Plantation.png', 'Superbugs.png', 'Tornado.png'];

  $('.coverImage').css('background-image', RandomBackgroundImage(backgroundImages));

  function RandomBackgroundImage(imageArray) {
    var number = Math.floor(Math.random() * imageArray.length);
    var image = imageArray[number];
    var url = 'url(/images/backgrounds/' + image + ')'

    return url;
  }

});