$(document).ready(function (){
    var banner = $('#banner');

    //Definir altura dinamica para el banner
    function alturaBanner () {
        var vpaltura = $(window).height();
        banner.css('height', vpaltura);
    }
    alturaBanner();
    // hace falta une vento 

    $(window).resize(alturaBanner);
});