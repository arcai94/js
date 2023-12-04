function numeroVocales() {

    //Recoge la frase introducida
    var frase = document.getElementById('frase_2').value;

    //Busca las coincidencias con las vocales declaradas en el match y las guarda en la variable vocales. Utiliza 'g' para que no pare en la primera coincidencia
    var vocales = frase.match(/[aeiouAEIOUáéíóúÁÉÍÓÚ]/g);  

    var cuentaVocales = {};

    //Si encuentra vocales entra en el if
    if(vocales) {

        //Recorre cada vocal
        vocales.forEach(function(vocal) {     
            vocal = vocal.toLowerCase();        //Transforma cada vocal a minúscula

            //Si existe ya un conteo de esa vocal le suma uno más al contador
            if(cuentaVocales[vocal]) {
                cuentaVocales[vocal]++;
            }

            //Si no existe conteo de esa vocal lo crea
            else {
                cuentaVocales[vocal] = 1;
            }
        });
        
        var total = 'Nº de veces que aparece cada una de las vocales: \n';

        //Recorre el registro de las vocales encontradas y lo guarda en total para imprimir
        for (var vocal in cuentaVocales) {
            total += vocal + ': ' + cuentaVocales[vocal] + '\n';
        }

        alert(total);       //Imprime el resultado

    }
    else {
        alert('No se han encontrado vocales');
    }

}