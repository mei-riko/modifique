import $ from 'jquery'
$(document).ready(() =>{
    // Mobile Navbar
    function navbarMobileClick( itemNav ){
        itemNav.on("click", function(e){
            if( $(".navbar").hasClass("navbar--mobile") ){
                e.preventDefault();
                let id = $(this).data("nav");
                let navbar = $(".navbar-inside#" + id);
                if( !navbar.hasClass("navbar-inside--active")){
                    // $(".navbar-inside.navbar-inside--active").removeClass("navbar-inside--active");
                    navbar.addClass("navbar-inside--active");
                }
            }
        });
    }
    function navbarMobileInsideClick( itemNav ){
        itemNav.on("click", function(e){
            if( $(".navbar").hasClass("navbar--mobile") ){
                e.preventDefault();
                let id = $(this).data("nav");
                let navbar = $(".navbar-inside#" + id);
                if( !navbar.hasClass("navbar-inside--active")){
                    // console.log( navbar );
                    navbar.addClass("navbar-inside--active");
                }
            }
        });
    }
    // Desktop Navbar
    function navbarHover( itemNav ){
        itemNav.hover(function(){
            let item = $(this).find(".navbar__item");
            let nav = item.data("nav");
            if( $(".navbar").hasClass("navbar--desktop") ){
                item.addClass("navbar__item--active");
                $(".navbar-inside#" + nav).addClass("navbar-inside--active");
            }
        },function(){
            let item = $(this).find(".navbar__item");
            let nav = item.data("nav");
            if( $(".navbar").hasClass("navbar--desktop") ){
                item.removeClass("navbar__item--active");
                $(".navbar-inside#" + nav).removeClass("navbar-inside--active");
            }
        });
    }
    function navbarInsideHover( itemNav ){
        itemNav.hover(function(){
        let item = $(this).find(".navbar-inside__item");
        let nav = item.data("nav");
        if( $(".navbar").hasClass("navbar--desktop") ){
            item.addClass("navbar-inside__item--active");
            $(".navbar-inside#" + nav).addClass("navbar-inside--active");
        }
    },function(){
        let item = $(this).find(".navbar-inside__item");
        let nav = item.data("nav");
        if( $(".navbar").hasClass("navbar--desktop") ){
            item.removeClass("navbar-inside__item--active");
            $(".navbar-inside#" + nav).removeClass("navbar-inside--active");
        }
    });
    }

    if ( $(window).width() > 991 || !window.matchMedia('screen and (max-width: 992px)').matches ){
        $(".navbar").removeClass("navbar--mobile").addClass("navbar--desktop");
    }else{
        $(".navbar").removeClass("navbar--desktop").addClass("navbar--mobile");
    }
    // Desktop Hover Nav
    navbarHover( $(".navbar .navbar__item-parent"));
    navbarInsideHover( $(".navbar .navbar-inside .navbar-inside__item-parent"));
    // Mobile Ckick Nav
    navbarMobileClick( $(".navbar .navbar__item-parent .navbar__item") );
    navbarMobileInsideClick( $(".navbar .navbar-inside .navbar-inside__item-parent .navbar-inside__item") );
    
    // Mobile Navbar
    $(".navbar-toggle#nav").on("click", function(e){
        e.preventDefault();
        let navbar = $(".navbar-collapse");
        if( !navbar.hasClass("navbar-collapse--active")){
            navbar.addClass("navbar-collapse--active");
            $("body").addClass("navbar-open");
        }else{
            navbar.removeClass("navbar-collapse--active");
            $("body").removeClass("navbar-open");
        }
    });
    $(".navbar-close").on("click", function(e){
        e.preventDefault();
        $(".navbar-collapse").removeClass("navbar-collapse--active");
        $(".navbar-inside.navbar-inside--active").removeClass("navbar-inside--active");
        $("body").removeClass("navbar-open");
    });
    $(".navbar-back").on("click", function(e){
        // e.preventDefault();
        let id = $(this).data("close");
        let navbar = $(".navbar-inside#" + id);
        navbar.removeClass("navbar-inside--active");
    });

    // Resize
    $(window).resize(function(){
        if ( $(window).width() > 991 || !window.matchMedia('screen and (max-width: 992px)').matches ){
            // Hide Navigation on Desktop
            $(".navbar-toggle").removeClass("navbar-toggle--active");
            $(".navbar-collapse").removeClass("navbar-collapse--active");
            $(".navbar-inside.navbar-inside--active").removeClass("navbar-inside--active");
            $("body").removeClass("navbar-open");
            // Remove Class
            $(".navbar").removeClass("navbar--mobile").addClass("navbar--desktop");
        }else{
            // Remove Class
            $(".navbar").removeClass("navbar--desktop").addClass("navbar--mobile");
        }
    });
});


// $(document).mouseup(function (e){ // событие клика по веб-документу
//     let dropdownActive = $(".navbar-collapse.navbar-collapse--active"); // элемент
//     if (!dropdownActive.is(e.target) // клик был не по блоку
//         // && dropdownActive.has(e.target).length === 0 // и не по его дочерним элементам
//         && !$(".navbar-toggle#nav").is(e.target) ) { 
//             $(".navbar-collapse").removeClass("navbar-collapse--active");
//             $("body").removeClass("navbar-open");
//     }
// });