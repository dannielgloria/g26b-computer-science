function bubbleSort(arr) {
  const len = arr.length; // Obtener la longitud del arreglo para usarla como límite en el bucle
  let swapped; // Variable para controlar si se han realizado intercambios

  do {
    swapped = false; // Establecer la variable swapped en falso al inicio de cada iteración

    for (let i = 0; i < len - 1; i++) {
      // Bucle que recorre el arreglo
      if (arr[i] > arr[i + 1]) {
        // Comprobar si el elemento actual es mayor que el siguiente
        // Si es así, los elementos están en el orden incorrecto y necesitamos intercambiarlos
        const temp = arr[i]; // Guardar temporalmente el valor del elemento actual en una variable temporal
        arr[i] = arr[i + 1]; // Asignar el valor del siguiente elemento al elemento actual, realizando el intercambio
        arr[i + 1] = temp; // Asignar el valor temporal (valor original del elemento actual) al siguiente elemento, completando el intercambio
        swapped = true; // Establecer swapped en verdadero para indicar que se ha realizado al menos un intercambio
      }
    }
  } while (swapped); // Repetir el bucle mientras se hayan realizado intercambios en la iteración anterior

  return arr; // Devolver el arreglo ordenado
}

// Ejemplo de uso:
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log(`Arreglo original: `,unsortedArray);

const sortedArray = bubbleSort(unsortedArray)
console.log(`Arreglo ordenado: `,sortedArray); // Resultado: [11, 12, 22, 25, 34, 64, 90]