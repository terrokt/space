$(function(){
    $('.slider__box').slick({
        prevArrow: '<img class="slider__arrow slider__arrow-left" src="../images/arrow-left.svg" alt="slider arrow">',
        nextArrow: '<img class="slider__arrow slider__arrow-right" src="../images/arrow-right.svg" alt="slider arrow">',
        responsive: [
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: false
              }
            },
            
          ]
    });

    $('.menu-btn').on('click', function () {
        $('.menu__list').toggleClass('active');
    })
});