/**
 * Crear un objeto "contador" con un método "incrementar" que aumente un valor "valorActual"
 *  en 1 y otro método "obtenerValor" que devuelva el valor actual.
 */

const contador = {
    valorActual: 0,
    incrementar(){
        this.valorActual++; // this.valorActual = this.valorActual + 1
    },
    obtenerValor(){
        return this.valorActual;
    }
};

contador.incrementar();
contador.incrementar();
contador.incrementar();
contador.incrementar();
contador.incrementar();
contador.incrementar();

console.log(contador.obtenerValor());

/**
 * Crear una función "ordenarArray" que acepte un array 
 * de números como parámetro y devuelva el array 
 * ordenado de menor a mayor.
 */

function ordenarArray(array){
    var resultado = array.sort((a,b)=> a-b);
    return resultado;
};

const numeros = [55,38,38,15,0];

console.log(ordenarArray(numeros));

/**
 * Crear una clase "Rectangulo" con propiedades "ancho" 
 * y "alto" y un método "area" que calcule el área del 
 * rectángulo.
 */

class Rectangulo{
    constructor(ancho, alto){
        this.ancho = ancho;
        this.alto = alto;
    }
    area(){
        return this.ancho * this.alto;
    }
};

const rectangulo = new Rectangulo(5,6);
console.log(rectangulo.area());

/**
 * Crear una función "factorial" que acepte un número 
 * como parámetro y devuelva su factorial 
 * (el producto de todos los números enteros positivos
 *  desde 1 hasta el número).
 */

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num* factorial(num-1);
    }
}

console.log(factorial(100));

/**
 * Crear un objeto "agenda" que permita agregar, 
 * eliminar y buscar contactos. Cada contacto debe 
 * tener un nombre, un email y un teléfono.
 */
