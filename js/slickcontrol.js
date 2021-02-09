$(document).ready(function(){
$('.galerija').slick({
    infinite: true,
    centerMode: false,
    centerPadding: '60px',
    slidesToShow: 4,
    variableWidth: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          infinite: false,
          arrows: false,
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 1
        }
      }
    ]
    });
});