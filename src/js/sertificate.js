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
            $(".sertificate__checkbox#delivery").removeClass("sertificate__checkbox--disable")
        }else{
            $(".sertificate__checkbox#delivery").addClass("sertificate__checkbox--disable")
        }
    });
    // Change Order Link
    // $("#constrictor .sertificate__color-input").on("change", function(e){});
});