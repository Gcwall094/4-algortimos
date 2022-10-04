function suma(){
var a;
var b;
var suma;

a = parseInt(prompt("Por favor ingresar el primer nombre"));
b = parseInt(prompt("Por favor ingresar el segundo nombre"));

suma = a+b;

alert("El nombre completo es: " + suma);
}

function opBasicas(){
    var A;
    var B;
    var Suma;
    var Resta;
    var Mult;
    var Div;

    A = parseInt(prompt("Por favor ingresar el primer valor"));
    B = parseInt(prompt("Por favor ingresar el segundo valor"));

    Suma = A+B;
    Resta = A-B;
    Mult = A*B;
    Div = A/B;
    alert("El resultado de la suma es: " + Suma+" La resta es: "+Resta+" La multiplicacion es: "+Mult+" La division es: "+Div);
}

