$(document).ready(function(){
    $('.slider').slick({
      infinite: true,
      autoplay: true,
      fade: true,
      dots: true,
      appendDots: $('.slick-slider-dots'),
      prevArrow:"<button type='button' class='slick-arrow slick-prev' style='display: grid;''> </button>",
      nextArrow:"<button type='button' class='slick-arrow slick-next' style='display: grid;'> </button>"
    });
});