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
            autoplay    : false,
            infinite    : false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        });
        // Review Page Screenshoot
        $(".slider__review").each(function(){
            $(this).slick({
                slidesToShow    : 5,
                slidesToScroll  : 5,
                arrows          : true,
                dots            : false,
                infinite        : false,
                autoplay        : false,
                responsive      : [
                    {
                        breakpoint: 993,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4,
                        }
                    },
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                        }
                    }
                ]
            });
        });
        $(".slider__review-list").each(function(){
            $(this).slick({
                slidesToShow    : 4,
                slidesToScroll  : 4,
                arrows          : true,
                dots            : false,
                autoplay        : false,
                infinite        : false,
                responsive      : [
                    {
                        breakpoint: 1481,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                        }
                    },
                    {
                        breakpoint: 993,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                        }
                    },
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    }
                ]
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

    // Заполнение счетчика
    function countSlider ( num, item ){
        item.each(function( i ){
            currentSlide[i] = $(this).slick("slickCurrentSlide") + 1;
            sumSlide[i] = $(this).slick("getSlick").slideCount;

            let count = sumSlide[i] / num ;

            if ( Math.ceil( count ) > 1 && Math.round( count ) != 0){
                $(this).parent().find(".slider_count__here").text( Math.ceil( currentSlide[i] / num ) );
                $(this).parent().find(".slider_count__sum").text( Math.ceil( count ) );
            } else{
                $(this).parent().find(".slider_count__container").hide();
            }

            // console.log( Math.ceil( currentSlide[i] / num ) + " " + Math.ceil( count ));
        });
    }
    // Смена цифры в слайдере
    function countChange ( num, item ){
        item.on("afterChange", function(event, slick, currentSlide, nextSlide){
            let currentChange = $(this).slick("slickCurrentSlide") + 1;
            $(this).parent().find(".slider_count__here").text( Math.ceil( currentChange / num ) );
        });
    }

    let windowWidth = $(window).width();
    // console.log( windowWidth );
    if ( windowWidth > 1480 ){
        countSlider( 5, $(".slider.slider_count .slider__review.review#instagram"));
        countSlider( 5, $(".slider.slider_count .slider__review.review#wa"));
        countSlider( 4, $(".slider.slider_count .slider__review-list.review#web"));

        countChange( 5, $(".slider.slider_count .slider__review.review#instagram"));
        countChange( 5, $(".slider.slider_count .slider__review.review#wa"));
        countChange( 4, $(".slider.slider_count .slider__review-list.review#web"));
    }
    if ( windowWidth > 992 && windowWidth < 1481){
        countSlider( 5, $(".slider.slider_count .slider__review.review#instagram"));
        countSlider( 5, $(".slider.slider_count .slider__review.review#wa"));
        countSlider( 3, $(".slider.slider_count .slider__review-list.review#web"));

        countChange( 5, $(".slider.slider_count .slider__review.review#instagram"));
        countChange( 5, $(".slider.slider_count .slider__review.review#wa"));
        countChange( 3, $(".slider.slider_count .slider__review-list.review#web"));    
    }
    if ( windowWidth > 768 &&  windowWidth < 993 ){
        countSlider( 4, $(".slider.slider_count .slider__review.review#instagram"));
        countSlider( 4, $(".slider.slider_count .slider__review.review#wa"));
        countSlider( 2, $(".slider.slider_count .slider__review-list.review#web"));

        countChange( 4, $(".slider.slider_count .slider__review.review#instagram"));
        countChange( 4, $(".slider.slider_count .slider__review.review#wa"));
        countChange( 2, $(".slider.slider_count .slider__review-list.review#web"));
    }
    if ( windowWidth > 479 &&  windowWidth < 769 ){
        countSlider( 3, $(".slider.slider_count .slider__review.review#instagram"));
        countSlider( 3, $(".slider.slider_count .slider__review.review#wa"));
        countSlider( 1, $(".slider.slider_count .slider__review-list.review#web"));

        countChange( 3, $(".slider.slider_count .slider__review.review#instagram"));
        countChange( 3, $(".slider.slider_count .slider__review.review#wa"));
        countChange( 1, $(".slider.slider_count .slider__review-list.review#web"));
    }
    if ( windowWidth < 480 ){
        countSlider( 2, $(".slider.slider_count .slider__review.review#instagram"));
        countSlider( 2, $(".slider.slider_count .slider__review.review#wa"));
        countSlider( 1, $(".slider.slider_count .slider__review-list.review#web"));

        countChange( 2, $(".slider.slider_count .slider__review.review#instagram"));
        countChange( 2, $(".slider.slider_count .slider__review.review#wa"));
        countChange( 1, $(".slider.slider_count .slider__review-list.review#web"));   
    }
    
// Resize
$(window).resize(function(){
    let windowWidth = $(window).width();
    
    if ( windowWidth > 1480 ){
        countSlider( 5, $(".slider.slider_count .slider__review.review#instagram"));
        countSlider( 5, $(".slider.slider_count .slider__review.review#wa"));
        countSlider( 4, $(".slider.slider_count .slider__review-list.review#web"));

        countChange( 5, $(".slider.slider_count .slider__review.review#instagram"));
        countChange( 5, $(".slider.slider_count .slider__review.review#wa"));
        countChange( 4, $(".slider.slider_count .slider__review-list.review#web"));
    }
    if ( windowWidth > 992 && windowWidth < 1481){
        countSlider( 5, $(".slider.slider_count .slider__review.review#instagram"));
        countSlider( 5, $(".slider.slider_count .slider__review.review#wa"));
        countSlider( 3, $(".slider.slider_count .slider__review-list.review#web"));

        countChange( 5, $(".slider.slider_count .slider__review.review#instagram"));
        countChange( 5, $(".slider.slider_count .slider__review.review#wa"));
        countChange( 3, $(".slider.slider_count .slider__review-list.review#web"));    
    }
    if ( windowWidth > 768 &&  windowWidth < 993 ){
        countSlider( 4, $(".slider.slider_count .slider__review.review#instagram"));
        countSlider( 4, $(".slider.slider_count .slider__review.review#wa"));
        countSlider( 2, $(".slider.slider_count .slider__review-list.review#web"));

        countChange( 4, $(".slider.slider_count .slider__review.review#instagram"));
        countChange( 4, $(".slider.slider_count .slider__review.review#wa"));
        countChange( 2, $(".slider.slider_count .slider__review-list.review#web"));
    }
    if ( windowWidth > 479 &&  windowWidth < 769 ){
        countSlider( 3, $(".slider.slider_count .slider__review.review#instagram"));
        countSlider( 3, $(".slider.slider_count .slider__review.review#wa"));
        countSlider( 1, $(".slider.slider_count .slider__review-list.review#web"));

        countChange( 3, $(".slider.slider_count .slider__review.review#instagram"));
        countChange( 3, $(".slider.slider_count .slider__review.review#wa"));
        countChange( 1, $(".slider.slider_count .slider__review-list.review#web"));
    }
    if ( windowWidth < 480 ){
        countSlider( 2, $(".slider.slider_count .slider__review.review#instagram"));
        countSlider( 2, $(".slider.slider_count .slider__review.review#wa"));
        countSlider( 1, $(".slider.slider_count .slider__review-list.review#web"));

        countChange( 2, $(".slider.slider_count .slider__review.review#instagram"));
        countChange( 2, $(".slider.slider_count .slider__review.review#wa"));
        countChange( 1, $(".slider.slider_count .slider__review-list.review#web"));   
    } 
});
});