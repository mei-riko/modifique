import $ from 'jquery'
$(document).ready(() =>{
    $("#service-nav .content-service__nav").on("click", function(){
        let service = $(this);
        let img1,
            img2,
            content,
            link;
        if( !service.hasClass("content-service__nav--active")){
            img1 = service.data("img-1");
            img2 = service.data("img-2");
            content = service.data("content");
            link = service.data("link");
            
            $(".content-service__nav.content-service__nav--active").removeClass("content-service__nav--active");
            service.addClass("content-service__nav--active");

            $(".content-service__quote").text(content);
            $("a.content-service__link").attr("href", link);

            // $('.content-service__image-item--first').animate({'opacity':'0'}, 200 ,function(){
            //     $(this).css("background-image", "url(" + img1 + ")");
            //     $(this).animate({'opacity':'1'}, 200);
            // });
            // $('.content-service__image-item--last').animate({'opacity':'0'}, 200 ,function(){
            //     $(this).css("background-image", "url(" + img2 + ")");
            //     $(this).animate({'opacity':'1'}, 200);
            // });
              
            $(".content-service__image-item--first").attr("style", "background-image: url('" + img1 + "');");
            $(".content-service__image-item--last").attr("style", "background-image: url('" + img2 + "');");
        }
    });
});