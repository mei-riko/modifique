import $ from 'jquery';

$(function() {
    // Навигация по прайс-листу категории
    $('.catalog .catalog__filter-title').on("click", function(e){
        e.preventDefault();
        if ( $(this).hasClass("catalog__filter-title--desktop") ){ return false;}

        if( !$(this).hasClass("catalog__filter-title--active") ){
            $(this).addClass("catalog__filter-title--active");
            $(this).closest(".catalog__filter").find(".catalog__filter-list").slideDown();
        }else{
            $(this).removeClass("catalog__filter-title--active");
            $(this).closest(".catalog__filter").find(".catalog__filter-list").slideUp();
        }
    });
    // Метки разрешения экрана
    if ( $(window).width() > 768 || !window.matchMedia('screen and (max-width: 768px)').matches ){
        $(".catalog .catalog__filter-title").removeClass("catalog__filter-title--mobile").addClass("catalog__filter-title--desktop");
    }else{
        $(".catalog .catalog__filter-title").removeClass("catalog__filter-title--desktop").addClass("catalog__filter-title--mobile");
    }
});

// Resize
$(window).on("resize", function(){
    if ( $(window).width() > 768 || !window.matchMedia('screen and (max-width: 768px)').matches ){
        $(".catalog .catalog__filter-title").removeClass("catalog__filter-title--mobile").addClass("catalog__filter-title--desktop");
        $(".catalog .catalog__filter-list").removeAttr("style");
    }else{
        $(".catalog .catalog__filter-title").removeClass("catalog__filter-title--desktop").addClass("catalog__filter-title--mobile");
    }
});