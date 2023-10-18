function esParOImpar(numero) {
    if (numero % 2 === 0) {
        console.log(numero + " es un número par.");
    } else {
        console.log(numero + " es un número impar.");
    }
}


function determinarPositivoNegativoCero(numero) {
    if (numero > 0) {
        console.log(numero + " es un número positivo.");
    } else if (numero < 0) {
        console.log(numero + " es un número negativo.");
    } else {
        console.log(numero + " es cero.");
    }
}


function mostrarNumerosParesHastaN(n) {
    if (n < 1) {
        console.log("Ingresa un número mayor o igual a 1.");
        return;
    }

    for (let i = 2; i <= n; i += 2) {
        console.log(i);
    }
}


function sumaDosNumeros() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultado = num1 + num2;
    document.getElementById("resultadoSuma").textContent = "La suma es: " + resultado;
}

function sumaElementosArreglo() {
    const inputArray = document.getElementById("arrNumeros").value;
    const numeros = inputArray.split(',').map(Number);
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    document.getElementById("resultadoSumaArreglo").textContent = "La suma de los elementos es: " + suma;
}

function verificarPalindromo() {
    const cadena = document.getElementById("cadenaPalindromo").value;
    const cadenaSinEspacios = cadena.replace(/\s/g, '').toLowerCase();
    const cadenaReversa = cadenaSinEspacios.split('').reverse().join('');
    const esPalindromo = cadenaSinEspacios === cadenaReversa;
    document.getElementById("resultadoPalindromo").textContent = esPalindromo ? "Es un palíndromo" : "No es un palíndromo";
}


function informacionPersona() {
    const persona = {};

    persona.nombre = prompt("Ingresa el nombre de la persona:");
    persona.edad = prompt("Ingresa la edad de la persona:");
    persona.direccion = prompt("Ingresa la dirección de la persona:");

    const resultado = "Información de la persona:\n" +
        "Nombre: " + persona.nombre + "\n" +
        "Edad: " + persona.edad + "\n" +
        "Dirección: " + persona.direccion;

    document.getElementById("resultadoPersona").textContent = resultado;
}

function informacionProductos() {
    const productos = [];

    while (true) {
        const producto = {};
        producto.nombre = prompt("Ingresa el nombre del producto:");
        producto.precio = parseFloat(prompt("Ingresa el precio del producto:"));
        producto.stock = parseInt(prompt("Ingresa la cantidad en stock del producto:"));
        productos.push(producto);

        const continuar = prompt("¿Deseas agregar otro producto? (Sí/No)").toLowerCase();
        if (continuar !== "sí") {
            break;
        }
    }

    let resultado = "Información de los productos:\n";

    productos.forEach(function(producto, index) {
        resultado += "Producto " + (index + 1) + "\n" +
            "Nombre: " + producto.nombre + "\n" +
            "Precio: " + producto.precio + "\n" +
            "Stock: " + producto.stock + "\n\n";
    });

    document.getElementById("resultadoProductos").textContent = resultado;
}

function ordenarNumeros() {
    const inputNumeros = document.getElementById("numerosAOrdenar").value;
    const numeros = inputNumeros.split(',').map(Number);
    const numerosOrdenados = ordenarNumerosAscendente(numeros);
    document.getElementById("resultadoNumerosOrdenados").textContent = "Números ordenados: " + numerosOrdenados.join(', ');
}

function ordenarNumerosAscendente(numeros) {
    return numeros.sort(function(a, b) {
        return a - b;
    });
}