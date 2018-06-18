$(document).ready(function() {

  var backgroundImages = [
    // 'Cartwheel.png',
    // 'ChurchMilitant.png',
    // 'images/backgrounds/Corals.png',
    // 'Disability.jpg',
    // 'ISIS.jpg',
    // 'images/backgrounds/Obama.png',
    // 'images/backgrounds/OJ.png',
    // 'images/backgrounds/Plantation.png',
    // 'images/backgrounds/Space.png',
    // 'images/backgrounds/Tornado.png',
    // 'images/backgrounds/Treehouse.png',
    // 'images/backgrounds/WhitePresident.jpg',
    {% for image in page.lead-images %}
      {{ image }},
    {% endfor %}
    'spacer'
  ];

  $('.leadImage').css('background-image', RandomBackgroundImage(backgroundImages));

  function RandomBackgroundImage(imageArray) {
    var number = Math.floor(Math.random() * (imageArray.length - 1));
    var image = imageArray[number];
    var url = 'url("images/texture.png"), url(' + image + ')'
    // var url = 'url(/images/backgrounds/' + image + ')'

    return url;
  }

});
