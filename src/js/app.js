import $ from 'jquery'
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
  $('.toggle-item').on("click", function(e){
    e.preventDefault();
    let toggle = $(this);
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
  // Навигация по прайс-листу категории
  $('.price .price__nav-toggle').on("click", function(e){
    e.preventDefault();
    let id = $(this).attr("href");
    let toggle = $('.toggle-item' + id);
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
    $('#contentTabs a').click(function (e) {
      e.preventDefault();
      console.log('1');
      $(this).tab('show');
    })
  }
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
      console.log("1");
    } else if ( $(this).hasClass("slider-index__button--play") ){
      $(this).removeClass("slider-index__button--play");
      $('.slider-index .slider.slider_index').slick('slickPlay');
      $(this).addClass("slider-index__button--pause");
      console.log("2");
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

  // Constructor Sertificate
  // Change Color
  $("#constrictor .sertificate__color-input").on("change", function(e){
    $(".sertificate__color-col.sertificate__color-col--active").removeClass("sertificate__color-col--active");
    $(this).parent().addClass("sertificate__color-col--active");
    let color = $(this).parent().data("color");
    $(".sertificate__preview").attr("class", "sertificate__preview sertificate__preview--" + color);
  });
  // Change Type & Delivery
  $("#constrictor .sertificate__type #offline").on("change", function(e){
    if( $(this).prop("checked") == true){
      $(".sertificate__checkbox#delivery").removeClass("sertificate__checkbox--disable")
    }else{
      $(".sertificate__checkbox#delivery").addClass("sertificate__checkbox--disable")
    }
  });
  // Change Order Link
  $("#constrictor .sertificate__color-input").on("change", function(e){});
  
  // Desktop Navbar
  function navbarHover( itemNav ){
    itemNav.hover(function(){
      let item = $(this).find(".navbar__item");
      let nav = item.data("nav");
      item.addClass("navbar__item--active");
      $(".navbar-inside#" + nav).addClass("navbar-inside--active");
    },function(){
      let item = $(this).find(".navbar__item");
      let nav = item.data("nav");
      item.removeClass("navbar__item--active");
      $(".navbar-inside#" + nav).removeClass("navbar-inside--active");
    });
  }
  function navbarInsideHover( itemNav ){
    itemNav.hover(function(){
      let item = $(this).find(".navbar-inside__item");
      let nav = item.data("nav");
      item.addClass("navbar-inside__item--active");
      $(".navbar-inside#" + nav).addClass("navbar-inside--active");
    },function(){
      let item = $(this).find(".navbar-inside__item");
      let nav = item.data("nav");
      item.removeClass("navbar-inside__item--active");
      $(".navbar-inside#" + nav).removeClass("navbar-inside--active");
    });
  }

  if ( $(window).width() > 991 || !window.matchMedia('screen and (max-width: 992px)').matches ){
    navbarHover( $(".navbar .navbar__item-parent"));
    navbarInsideHover( $(".navbar .navbar-inside__item-parent"));
  }

  // Mobile Navbar
  $(".navbar-toggle#nav").on("click", function(e){
		e.preventDefault();
    let navbar = $(".navbar-collapse");
		if( !navbar.hasClass("navbar-collapse--active")){
			navbar.addClass("navbar-collapse--active");
			$(".navbar-overlay").addClass("navbar-overlay--active");
		}else{
			navbar.removeClass("navbar-collapse--active");
			$(".navbar-overlay").removeClass("navbar-overlay--active");
		}
  });
  $(".navbar-close").on("click", function(e){
    e.preventDefault();
    $(".navbar-collapse").removeClass("navbar-collapse--active");
    $(".navbar-overlay").removeClass("navbar-overlay--active");
  });
  $(document).mouseup(function (e){ // событие клика по веб-документу
    let dropdownActive = $(".navbar-collapse.navbar-collapse--active"); // элемент
    if (!dropdownActive.is(e.target) // клик был не по блоку
          // && dropdownActive.has(e.target).length === 0 // и не по его дочерним элементам
          && !$(".navbar-toggle#nav").is(e.target) ) { 
              $(".navbar-collapse").removeClass("navbar-collapse--active");
              $(".navbar-overlay").removeClass("navbar-overlay--active");
            }
  });
  // Hide Navigation on Desktop
  $(window).resize(function(){
    if ( $(window).width() > 991 || !window.matchMedia('screen and (max-width: 992px)').matches ){
      $(".navbar-toggle").removeClass("navbar-toggle--active");
        $(".navbar-collapse").removeClass("navbar-collapse--active");
        $(".navbar-overlay").removeClass("navbar-overlay--active");
    }
  });
});