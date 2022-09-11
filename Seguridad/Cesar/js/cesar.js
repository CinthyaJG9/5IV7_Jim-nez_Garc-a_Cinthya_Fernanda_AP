var cesar= cesar||(function(){

    var proceso= function(txt, desp, action){

        /**primero hay que recorrer la matriz del alfabeto, hay que recorrer cada elemento del abecedario
         * conforme a su orden
         */
        var abc=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 
        'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

        var l= abc.length;

        //nececitamos una funcion para obtener la posicion que va a venir por la parte privada
        //o parte del usuario

        return function(c){

            var i= abc.indexOf(c.toLowerCase());

            /**
             * necesitamos saber donde estamos en la matriz del arreglo,
             * como lo vamos a recorrer para cuando llegue al final para poder aplicar el modulo
             */

            if(i!= -1){

                //obtenemos posicion

                var pos= i;

                //ciframos

                if(action){

                    pos+= desp;

                    //como se mueve

                    pos-=(pos>=1)?1:0;
                }else{

                    //descrifrar

                    pos-=desp;

                    //movimiento

                    pos +=(pos <0)?1:0;
                }
                return abc[pos];


            }

            return c;
        };
    })();
    
    //tenemos que saber que el texto este acorde al abc
    var re= (/[a-z]/ig);

    //funcion que se encargue del intercambio

    return String(txt).replace(re, function(match){

        return replace(match);
    });

};

return{

    //codificamos

    encode : function(txt, desp){

        return proceso(txt, desp, true);


    },

    decode : function (txt, desp){

        return proceso(txt, desp, false);
    }
};
//finaliza la función
})();

function cifrar(){

    document.getElementById('resultado').innerHTML = cesar.encode(document.getElementById("cadena"), value, 3);
}
function descifrar(){

    document.getElementById('resultado').innerHTML = cesar.decode(document.getElementById("cadena"), value, 3);
}