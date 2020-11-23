$(document).ready(function(){

    // seleccioando elementos en varibles
    var slider =$('#slider');
    var btnAnterior =$('#btnAnterior');
    var btnSiguiente =$('#btnSiguiente');
    // se pasa el ultimo slide al primer lugar

    $('#slider .slide:last').insertBefore('#slider .slide:first');

    // con margen negativo se vuelve a mostrar el primer slide

    slider.css('margin-left','-43%');

    // funcion para que el slide se mueva a la derecha , con un callback

    function moverDerecha() {
        if (!slider.is(':animated')) { //esto fue puesto en el tercer video
            slider.animate({
                marginLeft:'-105.6%'
            }, 700, function(){
                $('#slider .slide:first').insertAfter('#slider .slide:last');
                slider.css('margin-left', '-43%');


                resetInterval(); //la funcion esta abajo
            });  
        }
        
        
    }

    btnSiguiente.on('click',moverDerecha)

    // funcion par k s emeuva izq

    function moverIzquierda () {
        if (!slider.is(':animated')) { //esto fue puesto en el tercer video
            $('#slider .slide:last').insertBefore('#slider .slide:first'); 
            slider.css('margin-left','-105.6%');

            slider.animate({
                marginLeft:'-43%'
            }, 700 , function () {
                
                resetInterval(); //la funcion esta abajo

            });
        }
        

    }
    btnAnterior.on('click', moverIzquierda);
   

    // intervalo para que el slide se mueva automaticamente
    
   var intervalo= setInterval(moverDerecha, 5000); //falta resetearlo cando el ususario de clcika un boton
    function resetInterval () {
        clearInterval(intervalo);//esto lo elimina necesito volver a rreglarlo

        intervalo = setInterval(moverDerecha, 5000);
    }
});

