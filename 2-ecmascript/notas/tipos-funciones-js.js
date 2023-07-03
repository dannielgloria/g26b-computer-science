// 1 arrow functions
const suma = (num1, num2) => {
    return num1 + num2;
}

// 2 funciones anonimas
const arr = [];
arr.forEach(function(element) {
    console.log(element);
})

// 3 funciones autoinvocadas IIFE
var name = 'montoya';
(function() {
    console.log('bienvenido!!', name);
})();

(() => {
    console.log('BYE!!');
})();
  
/*
(contenido, mediante una funcion anonima o flecha)()ejecutar al contenido
/*
(() => {
    
})()

(function(){
    
})()
*/