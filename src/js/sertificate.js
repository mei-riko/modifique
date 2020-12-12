import $ from 'jquery'
$(document).ready(() =>{
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
            // Delivery
            $(".sertificate__checkbox#delivery").removeClass("sertificate__checkbox--disable");
            $(".sertificate__checkbox#delivery .radio .radio__input").each(function(){
                $(this).prop("disabled", false);
            });
            // Color
            $(".sertificate__color-col .sertificate__color-input#color1").parent().addClass("sertificate__color-col--active");
            $(".sertificate__color-col .sertificate__color-input#color1").prop("checked", true);
            $(".sertificate__preview").attr("class", "sertificate__preview sertificate__preview--grey");

            $(".sertificate__color-col .sertificate__color-input:not(#color1)").each(function(){
                $(this).prop("disabled", true);
                $(this).prop("checked", false);
                $(this).parent().addClass("sertificate__color-col--disable");
                $(this).parent().removeClass("sertificate__color-col--active");
            });
        }else{
            // Delivery
            $(".sertificate__checkbox#delivery").addClass("sertificate__checkbox--disable");
            $(".sertificate__checkbox#delivery .radio .radio__input").each(function(){
                $(this).prop("disabled", true);
            });
            // Color
            $(".sertificate__color-col .sertificate__color-input:not(#color1)").each(function(){
                $(this).prop("disabled", false);
                $(this).parent().removeClass("sertificate__color-col--disable");
            });
        }
    });
    // Change Order Link
    // $("#constrictor .sertificate__color-input").on("change", function(e){});
});