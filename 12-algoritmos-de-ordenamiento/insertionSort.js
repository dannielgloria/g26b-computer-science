function insertionSort(arr) {
  // Obtenemos la longitud del arreglo para utilizarlo en el bucle
  const n = arr.length;

  // Empezamos el bucle desde el segundo elemento (índice 1) hasta el último elemento del arreglo
  for (let i = 1; i < n; i++) {
    // Almacenamos el valor del elemento actual en una variable temporal
    let currentElement = arr[i];
    // Inicializamos una variable 'j' para recorrer los elementos ya ordenados del arreglo
    let j = i - 1;

    // Mientras 'j' sea mayor o igual a 0 y el elemento en la posición 'j' sea mayor que el elemento actual,
    // desplazamos el elemento 'arr[j]' una posición hacia adelante (a 'arr[j+1]')
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insertamos el elemento actual en su lugar correcto, que será la posición 'j+1' en el arreglo ordenado
    arr[j + 1] = currentElement;
  }

  // Devolvemos el arreglo ordenado
  return arr;
}

// Ejemplo de uso:
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray); // Resultado: [11, 12, 22, 25, 34, 64, 90]
