function suma() {
    let a = 0;
    let b = 0;
    let suma = 0;

    a = parseInt(prompt('Ingrese el Primer digito'));
    b= parseInt(prompt('Ingrese el segundo digito'));

    suma =  a +b ;

    alert('El nombre ingresado es  : ' + suma);
}

function basicOperations() {
    let a = 0;
    let b = 0;
    let suma = 0;
    let resta = 0;
    let multiplicacion = 0;
    let division = 0;

    a = parseInt(prompt('Ingrese el primer valor'));
    b = parseInt(prompt('Ingrese el segundo valor'));

    suma = a + b;
    resta = a - b;
    multiplicacion = a * b;
    division = a / b;

    alert('El resultado de la suma es: ' + suma);
    alert('El resultado de la resta es: ' + resta);
    alert('El resultado de la multiplicacion es: ' + multiplicacion);
    alert('El resultado de la division es: ' + division);
}




function areaTriangulo() {
    let base = 0;
    let altura = 0;
    let area = 0;

    base = parseInt(prompt('Ingrese la base del triangulo'));
    altura = parseInt(prompt('Ingrese la altura del triangulo'));
    
    area = (base * altura) / 2;

    alert('El area del triangulo es: ' + area);
}



function añoNacimiento() {
    let añoActual = 0;
    let edad = 0;
    let añoNacimiento = 0;
    
    añoActual = parseInt(prompt('Ingrese el año actual'));
    edad = parseInt(prompt('Ingrese la edad'));

    añoNacimiento = añoActual - edad;

    alert('El año de nacimiento del usuario es: ' + añoNacimiento);
}

