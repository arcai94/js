function comprobarMayor() {
    //Obtener los valores del documento HTML y convertirlos a flotante
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    //Comprueba si la entrada son números
    if(isNaN(num1) || isNaN(num2)) {
        alert('Error, no ha ingresado números');
        return;
    }

    //Compara para saber que número es mayor
    if(num1 > num2){
        alert('El número mayor es el primer número ingresado: ' + num1);
    }
    else if(num1 < num2){
        alert('El número mayor es el segundo número ingresado: ' + num2);
    }
    else{
        alert('Ambos números son iguales');
    }
}