$(function () {

  $('.services-slider').slick({
    arrows:true,
    dots:false,
    slidesToShow:4,
    slidesToScroll: 4,
    prevArrow: '<button type="button" class="slick-prev__services"><img src="images/services/rightarrow.svg"></button>',
    nextArrow: '<button type="button" class="slick-next__services"><img src="images/services/leftarrow.svg"></button>',
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 801,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 501,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1        
        }
      }
    ]
  });

  $('.review-slider').slick({
    arrows:true,
    dots:false,
    slidesToShow:4,
    slidesToScroll: 4,
    prevArrow: '<button type="button" class="slick-prev__review"><img src="images/review/rightarrow.svg"></button>',
    nextArrow: '<button type="button" class="slick-next__review"><img src="images/review/leftarrow.svg"></button>',
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 801,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2        
        }
      },
      {
        breakpoint: 501,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1        
        }
      }
    ]
  });

});

$(function(){

  $('.menu__btn').on('click',function(){
    $('.header__menu').toggleClass('header__menu--active');
  });
  $('.header__menu-link').on('click',function(){
    $('.header__menu').removeClass('header__menu--active');
  });

});
