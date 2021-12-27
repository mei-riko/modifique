import $ from 'jquery';
import './nav.js';
import './slider.js';
import './price.js';
import './sertificate.js';
import './service.js';

import './catalog.js';

$(document).ready(() =>{
  $(".scroll").click(function() {
    $("html, body").animate({
       scrollTop: $($(this).attr("href")).offset().top - 30 + "px"
    }, {
       duration: 500,
       easing: "swing"
    });
    return false;
  });
  // Input mask
  if( $('.phone').length > 0 ) {
    $(".phone").inputmask({
      mask: "+7 999 999 99 99",
      placeholder: " ",
      showMaskOnHover: true,

      onincomplete: function(){ 
        $(this).closest("form").addClass('error-phone'); 
        $(this).addClass('error'); 
        $(this).siblings(".error_phone").addClass('error').html('Укажите корректный номер'); 
      }, 
      oncomplete: function(){ 
        $(this).closest("form").removeClass('error-phone'); 
        $(this).removeClass('error'); 
        $(this).siblings(".error_phone").removeClass('error').html(''); 
      },
    })
  }
  $('input.phone').on('keydown', function(event) {
    if (event.keyCode === 13 && !$(this).inputmask("isComplete") ) {
      event.preventDefault();
      $(this).blur();
      return false;
    }
  });
  // Modal
  $('[data-fancybox]').fancybox({
    autoFocus: false
  });
  // Lazy Load Image
  if( $('.b-lazy').length > 0 ){
    // Lazy Load
    ;(function() {
        var bLazy = new Blazy({
          success: function(element){
            setTimeout(function(){
              var parent = element.parentNode;
              parent.className = parent.className.replace(/\bloading\b/,'');
            }, 200);
          }
        });
    })();
  }
  // Отмена стандартного поведения ссылки
  $('a[data-trigger="click"]').click(function(e){
    e.preventDefault();
  })
  // Раскрытие блока
  $('.toggle-item .toggle-item__title').on("click", function(e){
    e.preventDefault();
    let toggle = $(this).parent();
    if( !toggle.hasClass("toggle-item--active")){
      toggle.addClass("toggle-item--active");
      toggle.find(".toggle-item__title").addClass("toggle-item__title--active");
      toggle.find(".toggle-item__content").slideDown();
		}else{
			toggle.removeClass("toggle-item--active");
      toggle.find(".toggle-item__title").removeClass("toggle-item__title--active");
      toggle.find(".toggle-item__content").slideUp();
    }
  });
  // Переключаемые табы, инициализация
  if( $('.tab-js').length > 0 ){
    $('.tab-js a').click(function (e) {
      e.preventDefault();
      // console.log('1');
      $(this).tab('show');
    })
  }
  // FakeScroll
  if( $('.scroll-pane').length > 0 ){
    // $('.scroll-pane').jScrollPane();
  }
});