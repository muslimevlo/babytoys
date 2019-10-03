$(document).ready(function () {
    svg4everybody({});

    let mainSubnavHover = function() {
        $('.main-subnav__item').hover(
            function () {
                let parentList = $(this).closest('main-subnav__list');
                if ($(this).children('.main-subnav__list').length) {
                    let catNavHeight = $(this).children('.main-subnav__list').outerHeight();
                    if (parentList.outerHeight() < catNavHeight) {
                        parentList.css('height', catNavHeight);
                    }
                    parentList.css('width', '720');
                }
            }, function () {
                let parentList = $(this).closest('.main-subnav__list');
                parentList.css('height', 'auto');
                parentList.css('width', 'auto');
            }
        )
    };

    let openSearchForm = function() {
        $(document).on('click','.search__icon',function () {
            $(this).parent().addClass('search--open');
        });
    };

    let clearSearchForm = function() {
        $(document).on('click','.search__clear',function () {
            $(search__input).val('');
        });
    };

    let bannerSlider = function() {
        $('.js-banner').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: ".banner__navigation--prev",
            nextArrow: '.banner__navigation--next',
            dots: true,
            customPaging : function(slider, i) {
                return '<div class="banner__dot"></div>';
            },
            appendDots: '.banner__dots'
        })
    };

    let tabs = function () {
        $('.tabs-navigation__item').click(function() {
            let tabName = $(this).attr('show-tab'),
                tabsBody = $(this).closest('.tabs').find('.tabs__body')[0],
                tab = $(tabsBody).find('.' + tabName);
            $(this).addClass('tabs-navigation__item--active').siblings().removeClass('tabs-navigation__item--active');
            $(tab).addClass('tab--active').siblings().removeClass('tab--active');
            if ($(tabsBody).find('.js-products-line-slider').length) {
                $('.js-products-line-slider').each(function () {
                    $(this).slick('refresh');
                });
                $('.js-product-prev__slider').each(function (){
                    $(this).slick('refresh');
                });
            }
        });
    };

    // let productPrevSlider = function() {
    //     $('.js-product-prev__slider').each(function (idx) {
    //         let carouselId = "carousel" + idx;
    //         this.closest('.product-prev').id = carouselId;
    //         $(this).slick({
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         dots: true,
    //         appendDots: '#' + carouselId + ' .product-prev__colors',
    //         arrows: false,
    //         customPaging: function(slider,i){
    //             let color = $(slider.$slides[i]).data('color');
    //             return '<a class="product-prev__color" style="background-color:' + color + ';"></a>'
    //         }
    //     });
    //     });
    // };

    let productPrevSlider = function() {
        $('.js-product-prev__slider').each(function (idx) {
            let productPrevSliderClass = "products-line-slider-" + idx;
            this.closest('.product-prev').classList.add(productPrevSliderClass);
            $(this).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            swipe: false,
            infinite: false,
            appendDots: '.' + productPrevSliderlId + ' .product-prev__colors',
            arrows: false,
            customPaging: function(slider,i){
                let color = $(slider.$slides[i]).data('color');
                return '<div class="product-prev__color" style="background-color:' + color + '"></div>'
            }
        });
        });
    };

    let productLineSlider = function () {
<<<<<<< HEAD
        $('.js-products-line-slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1139,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true,
                  appendDots: '.products-line-slider__dots', 
                  prevArrow: '.products-line-slider__btn--prev',
                  nextArrow: '.products-line-slider__btn--next',
                  customPaging : function(slider, i) {
                      return '<div class="products-line-slider__dot"></div>';
                  },
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          
        })
=======
        $('.js-products-line-slider').each(function (idx) {
            let productsLineSliderID = "products-line-slider-" + idx;
            this.closest('.products-line-slider').id = productsLineSliderID;
                $(this).slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: false,
                dots: true,
                appendDots: '#' + productLineSliderID + '.products-line-slider__dots', 
                prevArrow: '#' + productLineSliderID + '.products-line-slider__btn--prev',
                nextArrow: '#' + productLineSliderID + '.products-line-slider__btn--next',
                responsive: [
                    {
                        breakpoint: 1139,
                        settings: {
                            slidesToShow: 3,
                            customPaging : function(slider, i) {
                                return '<div class="products-line-slider__dot"></div>';
                            },
                        }
                    }
                ]
            });
        });
>>>>>>> 1ec3cc476c6fa012487bee10ae317541f1c464a7
    };
    
    mainSubnavHover();
    openSearchForm();
    clearSearchForm();
    bannerSlider();
    tabs();
    productPrevSlider();
    productLineSlider();
});
$(window).on('load', function () {
    $(".sk-circle").fadeOut();
    $(".preloader").delay(400).fadeOut("slow");
    $("body").removeClass("fixed");
});


(function(){
    'use strict';
      $(window).on('load', function () {
          if ($(".pre-loader").length > 0)
          {
              $(".pre-loader").fadeOut("slow");
          }
      });
  })(jQuery)
