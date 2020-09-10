import $ from 'jquery'
$(document).ready(() =>{
    // Навигация по прайс-листу категории
    $('.price .price__nav-toggle').on("click", function(e){
        e.preventDefault();
        let id = $(this).attr("href");
        let toggle = $('.toggle-item' + id);
        if( !toggle.hasClass("toggle-item--active")){
            toggle.addClass("toggle-item--active");
            toggle.find(".toggle-item__title").addClass("toggle-item__title--active");
            toggle.find(".toggle-item__content").slideDown();

            if ( !$(window).width() > 768 || window.matchMedia('screen and (max-width: 768px)').matches ){
                $("html, body").animate({
                    scrollTop: $(id).offset().top - 15 + "px"
                }, {
                    duration: 500,
                    easing: "swing"
                });
            }
        }
    });
    // Метки разрешения экрана
    if ( $(window).width() > 768 || !window.matchMedia('screen and (max-width: 768px)').matches ){
        $(".price .price__nav-title").removeClass("price__nav-title--mobile").addClass("price__nav-title--desktop");
    }else{
        $(".price .price__nav-title").removeClass("price__nav-title--desktop").addClass("price__nav-title--mobile");
    }
    // Показ категорий на мобильном
    $('.price .price__nav-title.price__nav-title--mobile').on("click", function(e){
        $('.price__nav-list').slideToggle();
        $(this).toggleClass("price__nav-title--active");
    });
});
// Resize
$(window).resize(function(){
    if ( $(window).width() > 768 || !window.matchMedia('screen and (max-width: 768px)').matches ){
      $(".price .price__nav-title").removeClass("price__nav-title--mobile").addClass("price__nav-title--desktop");
      $('.price__nav-list').removeAttr("style");
    }else{
        $(".price .price__nav-title").removeClass("price__nav-title--desktop").addClass("price__nav-title--mobile");
    }
  });
// else{
// 	toggle.removeClass("toggle-item--active");
//   toggle.find(".toggle-item__title").removeClass("toggle-item__title--active");
//   toggle.find(".toggle-item__content").slideUp();
// }