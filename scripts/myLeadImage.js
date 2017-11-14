$(document).ready(function() {

  var backgroundImages = ['ChurchMilitant.png', 'CityOfFuture.png', 'Corals.png', 'Tornado.png', 'OJ.png', 'Obama.png', 'Roxane.png', 'YouAreHere.png', 'WhitePresident.jpg', 'BorderPatrol.jpg', 'DroneKing.png', 'AltRight.jpg', 'DACADoctors.jpg', 'Disability.jpg', 'Sedaris.jpg', 'MonaLisa.png', 'ISIS.jpg', 'Unpresidented.jpg', 'Quoted.jpg'];

  $('.leadImage').css('background-image', RandomBackgroundImage(backgroundImages));

  function RandomBackgroundImage(imageArray) {
    var number = Math.floor(Math.random() * imageArray.length);
    var image = imageArray[number];
    var url = 'url("images/texture.png"), url(/images/backgrounds/' + image + ')'
    // var url = 'url(/images/backgrounds/' + image + ')'

    return url;
  }

});
