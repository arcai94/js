function escribirVocales() {

    //Recoger la frase introducida
    var frase = document.getElementById('frase_1').value;

    //Capturar las vocales en la variable vocales
    var vocales = frase.match(/[aeiouAEIOUáéíóúÁÉÍÓÚ]/g); //Utiliza el metodo match() para buscar las coincidencias. Utiliza 'g' para no detenerse en la primera coincidencia

    //Condicional para mostrar las vocales si las encontró mediante un alert
    if(vocales) {
        alert('Las vocales encontradas son: ' + vocales.join(','));
    }
    else {
        alert('No se han encontrado vocales');
    }
}