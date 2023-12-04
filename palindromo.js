function esPalindromo() {
    var entrada = document.getElementById('palindromo').value;      //Recoge la palabra introducida
    var palabra = entrada.toLowerCase();        //Transforma la palabra a todo en minúsculas para que no haya problema con las mayúsculas
    var palabraInvertida = palabra.split('').reverse().join('');        //Guarda en palabraInvertida la palabra del revés

    //Compara si son iguales
    if(palabra == palabraInvertida) {
        alert('La palabra SI es un palíndromo');
    }
    else {
        alert('La palabra NO es un palíndromo');
    }
}