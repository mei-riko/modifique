!function(e){var t={};function a(l){if(t[l])return t[l].exports;var o=t[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=t,a.d=function(e,t,l){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(a.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(l,o,function(t){return e[t]}.bind(null,o));return l},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";var l,o=a(1),i=(l=o)&&l.__esModule?l:{default:l};(0,i.default)(document).ready((function(){((0,i.default)(".scroll").click((function(){return(0,i.default)("html, body").animate({scrollTop:(0,i.default)((0,i.default)(this).attr("href")).offset().top+"px"},{duration:500,easing:"swing"}),!1})),(0,i.default)(".phone").length>0&&(0,i.default)(".phone").inputmask({mask:"+7 999 999 99 99",placeholder:" ",showMaskOnHover:!0,onincomplete:function(){(0,i.default)(this).closest("form").addClass("error-phone"),(0,i.default)(this).addClass("error"),(0,i.default)(this).siblings(".error_phone").addClass("error").html("Укажите корректный номер")},oncomplete:function(){(0,i.default)(this).closest("form").removeClass("error-phone"),(0,i.default)(this).removeClass("error"),(0,i.default)(this).siblings(".error_phone").removeClass("error").html("")}}),(0,i.default)("input.phone").on("keydown",(function(e){if(13===e.keyCode&&!(0,i.default)(this).inputmask("isComplete"))return e.preventDefault(),(0,i.default)(this).blur(),!1})),(0,i.default)("[data-fancybox]").fancybox({autoFocus:!1}),(0,i.default)(".b-lazy").length>0&&new Blazy({success:function(e){setTimeout((function(){var t=e.parentNode;t.className=t.className.replace(/\bloading\b/,"")}),200)}}),(0,i.default)('a[data-trigger="click"]').click((function(e){e.preventDefault()})),(0,i.default)(".toggle-item").on("click",(function(e){e.preventDefault();var t=(0,i.default)(this);t.hasClass("toggle-item--active")?(t.removeClass("toggle-item--active"),t.find(".toggle-item__title").removeClass("toggle-item__title--active"),t.find(".toggle-item__content").slideUp()):(t.addClass("toggle-item--active"),t.find(".toggle-item__title").addClass("toggle-item__title--active"),t.find(".toggle-item__content").slideDown())})),(0,i.default)(".price .price__nav-toggle").on("click",(function(e){e.preventDefault();var t=(0,i.default)(this).attr("href"),a=(0,i.default)(".toggle-item"+t);a.hasClass("toggle-item--active")?(a.removeClass("toggle-item--active"),a.find(".toggle-item__title").removeClass("toggle-item__title--active"),a.find(".toggle-item__content").slideUp()):(a.addClass("toggle-item--active"),a.find(".toggle-item__title").addClass("toggle-item__title--active"),a.find(".toggle-item__content").slideDown())})),(0,i.default)(".tab-js").length>0&&(0,i.default)("#contentTabs a").click((function(e){e.preventDefault(),console.log("1"),(0,i.default)(this).tab("show")})),(0,i.default)(".slider").length>0)&&((0,i.default)(".slider_docs").slick({slidesToShow:4,slidesToScroll:4,arrows:!0,dots:!1,autoplay:!1,responsive:[{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,arrows:!1,dots:!0}},{breakpoint:480,settings:{slidesToShow:4,slidesToScroll:4,infinite:!0,arrows:!1,dots:!0}}]}),(0,i.default)(".slider__review").each((function(){(0,i.default)(this).slick({slidesToShow:5,slidesToScroll:5,arrows:!0,dots:!1,autoplay:!1})})),(0,i.default)(".slider__review-list").each((function(){(0,i.default)(this).slick({slidesToShow:4,slidesToScroll:4,arrows:!0,dots:!1,autoplay:!1})})));var e=[],t=[];(0,i.default)(".slider .review").each((function(a){e[a]=(0,i.default)(this).slick("slickCurrentSlide")+1,t[a]=(0,i.default)(this).slick("getSlick").slideCount,1!=Math.round(t[a]/5)&&0!=Math.round(t[a]/5)?((0,i.default)(this).parent().find(".slider_count__here").text(Math.round(e[a]/5)+1),(0,i.default)(this).parent().find(".slider_count__sum").text(Math.round(t[a]/5))):(0,i.default)(this).parent().find(".slider_count__container").hide()})),(0,i.default)(".slider .review").on("afterChange",(function(e,t,a,l){var o=(0,i.default)(this).slick("slickCurrentSlide")+1;(0,i.default)(this).parent().find(".slider_count__here").text(Math.round(o/5)+1)})),(0,i.default)("#constrictor .sertificate__color-input").on("change",(function(e){(0,i.default)(".sertificate__color-col.sertificate__color-col--active").removeClass("sertificate__color-col--active"),(0,i.default)(this).parent().addClass("sertificate__color-col--active");var t=(0,i.default)(this).parent().data("color");(0,i.default)(".sertificate__preview").attr("class","sertificate__preview sertificate__preview--"+t)})),(0,i.default)("#constrictor .sertificate__type #offline").on("change",(function(e){1==(0,i.default)(this).prop("checked")?(0,i.default)(".sertificate__checkbox#delivery").removeClass("sertificate__checkbox--disable"):(0,i.default)(".sertificate__checkbox#delivery").addClass("sertificate__checkbox--disable")})),(0,i.default)("#constrictor .sertificate__color-input").on("change",(function(e){})),(0,i.default)(".navbar-toggle#nav").on("click",(function(e){e.preventDefault();var t=(0,i.default)(".navbar-collapse");t.hasClass("navbar-collapse--active")?(t.removeClass("navbar-collapse--active"),(0,i.default)(".navbar-overlay").removeClass("navbar-overlay--active")):(t.addClass("navbar-collapse--active"),(0,i.default)(".navbar-overlay").addClass("navbar-overlay--active"))})),(0,i.default)(".navbar-close").on("click",(function(e){e.preventDefault(),(0,i.default)(".navbar-collapse").removeClass("navbar-collapse--active"),(0,i.default)(".navbar-overlay").removeClass("navbar-overlay--active")})),(0,i.default)(document).mouseup((function(e){(0,i.default)(".navbar-collapse.navbar-collapse--active").is(e.target)||(0,i.default)(".navbar-toggle#nav").is(e.target)||((0,i.default)(".navbar-collapse").removeClass("navbar-collapse--active"),(0,i.default)(".navbar-overlay").removeClass("navbar-overlay--active"))})),(0,i.default)(window).resize((function(){((0,i.default)(window).width()>991||!window.matchMedia("screen and (max-width: 992px)").matches)&&((0,i.default)(".navbar-toggle").removeClass("navbar-toggle--active"),(0,i.default)(".navbar-collapse").removeClass("navbar-collapse--active"),(0,i.default)(".navbar-overlay").removeClass("navbar-overlay--active"))}))}))},function(e,t){e.exports=jQuery}]);