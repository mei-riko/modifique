import $ from 'jquery'
$(document).ready(() =>{
    // Слайдер
    if( $('.slider').length > 0 ){
        // Index
        let $slickIndex = $('.slider_index');
        $slickIndex.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows        : false,
            dots          : true,
            autoplay      : true,
            autoplaySpeed : 4000,
            appendDots    : '.slider-index__dots',
            fade          : true
        });
        // Review Docs Col
        let $slickDocs = $('.slider_docs');
        $slickDocs.slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows      : true,
            dots        : false,
            autoplay  : false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        infinite: true,
                        arrows: false,
                        dots: true
                    }
                }
            ]
        });
        // Review Page Screenshoot
        $(".slider__review").each(function(){
            $(this).slick({
                slidesToShow: 5,
                slidesToScroll: 5,
                arrows      : true,
                dots        : false,
                autoplay  : false
            });
        });
        $(".slider__review-list").each(function(){
            $(this).slick({
                slidesToShow: 4,
                slidesToScroll: 4,
                arrows      : true,
                dots        : false,
                autoplay  : false
            });
        });
    }
    // Play & Pause Index Slider
    $('.slider-index .slider-index__button').on('click',function(){
        if( $(this).hasClass("slider-index__button--pause") ){
            $(this).removeClass("slider-index__button--pause");
            $('.slider-index .slider.slider_index').slick('slickPause');
            $(this).addClass("slider-index__button--play");
            // console.log("1");
        } else if ( $(this).hasClass("slider-index__button--play") ){
            $(this).removeClass("slider-index__button--play");
            $('.slider-index .slider.slider_index').slick('slickPlay');
            $(this).addClass("slider-index__button--pause");
            // console.log("2");
        }
    });
    // Счетчики для табов с отзывами
    let currentSlide = [];
    let sumSlide = [];
    $(".slider .review").each(function( i ){
        currentSlide[i] = $(this).slick("slickCurrentSlide") + 1;
        sumSlide[i] = $(this).slick("getSlick").slideCount;
        if ( Math.round( sumSlide[i] / 5 ) != 1 && Math.round( sumSlide[i] / 5 ) != 0){
            $(this).parent().find(".slider_count__here").text( Math.round( currentSlide[i] / 5 ) + 1 );
            $(this).parent().find(".slider_count__sum").text( Math.round( sumSlide[i] / 5 ) );
        } else{
            $(this).parent().find(".slider_count__container").hide();
        }
    });
    // Смена цифры в слайдере
    $(".slider .review").on("afterChange", function(event, slick, currentSlide, nextSlide){
        let currentChange = $(this).slick("slickCurrentSlide") + 1;
        $(this).parent().find(".slider_count__here").text( Math.round( currentChange / 5 ) + 1 );
    });
});