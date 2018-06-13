$(document).ready(function() {

  var backgroundImages = ['Corals.png',
    'Disability.jpg',
    'ISIS.jpg',
    'Obama.png',
    'OJ.png',
    'Plantation.png',
    'Tornado.png',
    'Treehouse.png'
  ];

  $('.coverImage').css('background-image', RandomBackgroundImage(backgroundImages));

  function RandomBackgroundImage(imageArray) {
    var number = Math.floor(Math.random() * imageArray.length);
    var image = imageArray[number];
    // var url = 'url("images/texture.png"), url(/images/backgrounds/' + image + ')'
    var url = 'url(images/backgrounds/' + image + ')'

    return url;
  }

});
