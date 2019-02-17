$(document).ready(function () {
  'use strict';

  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('nav').addClass('fixed');
    } else {
      $('nav').removeClass('fixed');
    }
  });


  $('.tbro3at').hover(function () {
    setInterval(function () {
      $(".trmometer > span").animate({
        'width': '26%'
      }, 3000);
    }, 500);
    clearInterval();
  });

  $('.owl-carousel').owlCarousel({

    responsiveClass: true,

  });

  $('.images .plus-img').hover(function () {
    $(this).find('div').fadeIn(500);
  },function () {
    $(this).find('div').fadeOut(500);
  });

$('.images .plus-img').click(function(){

});


lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
})
$('.tabs li').click(function(){
  $(this).addClass('active').siblings().removeClass('active');
    $($(this).data('target')).addClass('active').siblings().removeClass('active');

    $(this).addClass($(this).data('color')).siblings().removeClass($('.tabs li').data('color'));
});


});