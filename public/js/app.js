!function(e){var a={};function t(i){if(a[i])return a[i].exports;var n=a[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=a,t.d=function(e,a,i){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)t.d(i,n,function(a){return e[a]}.bind(null,n));return i},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=1)}([function(e,a){e.exports=jQuery},function(e,a,t){"use strict";var i,n=t(0),l=(i=n)&&i.__esModule?i:{default:i};t(2),t(3),t(4),(0,l.default)(document).ready((function(){(0,l.default)(".scroll").click((function(){return(0,l.default)("html, body").animate({scrollTop:(0,l.default)((0,l.default)(this).attr("href")).offset().top-30+"px"},{duration:500,easing:"swing"}),!1})),(0,l.default)(".phone").length>0&&(0,l.default)(".phone").inputmask({mask:"+7 999 999 99 99",placeholder:" ",showMaskOnHover:!0,onincomplete:function(){(0,l.default)(this).closest("form").addClass("error-phone"),(0,l.default)(this).addClass("error"),(0,l.default)(this).siblings(".error_phone").addClass("error").html("Укажите корректный номер")},oncomplete:function(){(0,l.default)(this).closest("form").removeClass("error-phone"),(0,l.default)(this).removeClass("error"),(0,l.default)(this).siblings(".error_phone").removeClass("error").html("")}}),(0,l.default)("input.phone").on("keydown",(function(e){if(13===e.keyCode&&!(0,l.default)(this).inputmask("isComplete"))return e.preventDefault(),(0,l.default)(this).blur(),!1})),(0,l.default)("[data-fancybox]").fancybox({autoFocus:!1}),(0,l.default)(".b-lazy").length>0&&new Blazy({success:function(e){setTimeout((function(){var a=e.parentNode;a.className=a.className.replace(/\bloading\b/,"")}),200)}}),(0,l.default)('a[data-trigger="click"]').click((function(e){e.preventDefault()})),(0,l.default)(".toggle-item").on("click",(function(e){e.preventDefault();var a=(0,l.default)(this);a.hasClass("toggle-item--active")?(a.removeClass("toggle-item--active"),a.find(".toggle-item__title").removeClass("toggle-item__title--active"),a.find(".toggle-item__content").slideUp()):(a.addClass("toggle-item--active"),a.find(".toggle-item__title").addClass("toggle-item__title--active"),a.find(".toggle-item__content").slideDown())})),(0,l.default)(".price .price__nav-toggle").on("click",(function(e){e.preventDefault();var a=(0,l.default)(this).attr("href"),t=(0,l.default)(".toggle-item"+a);t.hasClass("toggle-item--active")?(t.removeClass("toggle-item--active"),t.find(".toggle-item__title").removeClass("toggle-item__title--active"),t.find(".toggle-item__content").slideUp()):(t.addClass("toggle-item--active"),t.find(".toggle-item__title").addClass("toggle-item__title--active"),t.find(".toggle-item__content").slideDown())})),(0,l.default)(".tab-js").length>0&&(0,l.default)("#contentTabs a").click((function(e){e.preventDefault(),console.log("1"),(0,l.default)(this).tab("show")}))}))},function(e,a,t){"use strict";var i,n=t(0),l=(i=n)&&i.__esModule?i:{default:i};(0,l.default)(document).ready((function(){(0,l.default)(window).width()>991||!window.matchMedia("screen and (max-width: 992px)").matches?(0,l.default)(".navbar").removeClass("navbar--mobile").addClass("navbar--desktop"):(0,l.default)(".navbar").removeClass("navbar--desktop").addClass("navbar--mobile"),(0,l.default)(".navbar .navbar__item-parent").hover((function(){var e=(0,l.default)(this).find(".navbar__item"),a=e.data("nav");(0,l.default)(".navbar").hasClass("navbar--desktop")&&(e.addClass("navbar__item--active"),(0,l.default)(".navbar-inside#"+a).addClass("navbar-inside--active"))}),(function(){var e=(0,l.default)(this).find(".navbar__item"),a=e.data("nav");(0,l.default)(".navbar").hasClass("navbar--desktop")&&(e.removeClass("navbar__item--active"),(0,l.default)(".navbar-inside#"+a).removeClass("navbar-inside--active"))})),function(e){e.hover((function(){var e=(0,l.default)(this).find(".navbar-inside__item"),a=e.data("nav");(0,l.default)(".navbar").hasClass("navbar--desktop")&&(e.addClass("navbar-inside__item--active"),(0,l.default)(".navbar-inside#"+a).addClass("navbar-inside--active"))}),(function(){var e=(0,l.default)(this).find(".navbar-inside__item"),a=e.data("nav");(0,l.default)(".navbar").hasClass("navbar--desktop")&&(e.removeClass("navbar-inside__item--active"),(0,l.default)(".navbar-inside#"+a).removeClass("navbar-inside--active"))}))}((0,l.default)(".navbar .navbar-inside .navbar-inside__item-parent")),function(e){e.on("click",(function(e){e.preventDefault();var a=(0,l.default)(this).data("nav"),t=(0,l.default)(".navbar-inside#"+a);t.hasClass("navbar-inside--active")||t.addClass("navbar-inside--active")}))}((0,l.default)(".navbar .navbar__item-parent .navbar__item")),function(e){e.on("click",(function(e){e.preventDefault();var a=(0,l.default)(this).data("nav"),t=(0,l.default)(".navbar-inside#"+a);t.hasClass("navbar-inside--active")||t.addClass("navbar-inside--active")}))}((0,l.default)(".navbar .navbar-inside .navbar-inside__item-parent .navbar-inside__item")),(0,l.default)(".navbar-toggle#nav").on("click",(function(e){e.preventDefault();var a=(0,l.default)(".navbar-collapse");a.hasClass("navbar-collapse--active")?(a.removeClass("navbar-collapse--active"),(0,l.default)("body").removeClass("navbar-open")):(a.addClass("navbar-collapse--active"),(0,l.default)("body").addClass("navbar-open"))})),(0,l.default)(".navbar-close").on("click",(function(e){e.preventDefault(),(0,l.default)(".navbar-collapse").removeClass("navbar-collapse--active"),(0,l.default)(".navbar-inside.navbar-inside--active").removeClass("navbar-inside--active"),(0,l.default)("body").removeClass("navbar-open")})),(0,l.default)(".navbar-back").on("click",(function(e){var a=(0,l.default)(this).data("close");(0,l.default)(".navbar-inside#"+a).removeClass("navbar-inside--active")})),(0,l.default)(window).resize((function(){(0,l.default)(window).width()>991||!window.matchMedia("screen and (max-width: 992px)").matches?((0,l.default)(".navbar-toggle").removeClass("navbar-toggle--active"),(0,l.default)(".navbar-collapse").removeClass("navbar-collapse--active"),(0,l.default)(".navbar-inside.navbar-inside--active").removeClass("navbar-inside--active"),(0,l.default)("body").removeClass("navbar-open"),(0,l.default)(".navbar").removeClass("navbar--mobile").addClass("navbar--desktop")):(0,l.default)(".navbar").removeClass("navbar--desktop").addClass("navbar--mobile")}))}))},function(e,a,t){"use strict";var i,n=t(0),l=(i=n)&&i.__esModule?i:{default:i};(0,l.default)(document).ready((function(){(0,l.default)(".slider").length>0&&((0,l.default)(".slider_index").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!0,autoplay:!0,autoplaySpeed:4e3,appendDots:".slider-index__dots",fade:!0}),(0,l.default)(".slider_docs").slick({slidesToShow:4,slidesToScroll:4,arrows:!0,dots:!1,autoplay:!1,responsive:[{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,arrows:!1,dots:!0}},{breakpoint:480,settings:{slidesToShow:4,slidesToScroll:4,infinite:!0,arrows:!1,dots:!0}}]}),(0,l.default)(".slider__review").each((function(){(0,l.default)(this).slick({slidesToShow:5,slidesToScroll:5,arrows:!0,dots:!1,autoplay:!1})})),(0,l.default)(".slider__review-list").each((function(){(0,l.default)(this).slick({slidesToShow:4,slidesToScroll:4,arrows:!0,dots:!1,autoplay:!1})})));(0,l.default)(".slider-index .slider-index__button").on("click",(function(){(0,l.default)(this).hasClass("slider-index__button--pause")?((0,l.default)(this).removeClass("slider-index__button--pause"),(0,l.default)(".slider-index .slider.slider_index").slick("slickPause"),(0,l.default)(this).addClass("slider-index__button--play")):(0,l.default)(this).hasClass("slider-index__button--play")&&((0,l.default)(this).removeClass("slider-index__button--play"),(0,l.default)(".slider-index .slider.slider_index").slick("slickPlay"),(0,l.default)(this).addClass("slider-index__button--pause"))}));var e=[],a=[];(0,l.default)(".slider .review").each((function(t){e[t]=(0,l.default)(this).slick("slickCurrentSlide")+1,a[t]=(0,l.default)(this).slick("getSlick").slideCount,1!=Math.round(a[t]/5)&&0!=Math.round(a[t]/5)?((0,l.default)(this).parent().find(".slider_count__here").text(Math.round(e[t]/5)+1),(0,l.default)(this).parent().find(".slider_count__sum").text(Math.round(a[t]/5))):(0,l.default)(this).parent().find(".slider_count__container").hide()})),(0,l.default)(".slider .review").on("afterChange",(function(e,a,t,i){var n=(0,l.default)(this).slick("slickCurrentSlide")+1;(0,l.default)(this).parent().find(".slider_count__here").text(Math.round(n/5)+1)}))}))},function(e,a,t){"use strict";var i,n=t(0),l=(i=n)&&i.__esModule?i:{default:i};(0,l.default)(document).ready((function(){(0,l.default)("#constrictor .sertificate__color-input").on("change",(function(e){(0,l.default)(".sertificate__color-col.sertificate__color-col--active").removeClass("sertificate__color-col--active"),(0,l.default)(this).parent().addClass("sertificate__color-col--active");var a=(0,l.default)(this).parent().data("color");(0,l.default)(".sertificate__preview").attr("class","sertificate__preview sertificate__preview--"+a)})),(0,l.default)("#constrictor .sertificate__type #offline").on("change",(function(e){1==(0,l.default)(this).prop("checked")?(0,l.default)(".sertificate__checkbox#delivery").removeClass("sertificate__checkbox--disable"):(0,l.default)(".sertificate__checkbox#delivery").addClass("sertificate__checkbox--disable")}))}))}]);