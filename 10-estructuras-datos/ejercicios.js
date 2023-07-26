/*
1.- Hacer una función que reciba como parámetros una pila, y un número. La función debe retornar tantos elementos como diga el número (segundo parámetro).
Entrada : mifuncion([‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’,‘Papaya’,‘Sandía’,‘Melón’],4)
Salida: [‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’].
*/


class Pila {
  constructor(){
    this.pila = []
  }

  push(nuevoValor){
    this.pila.push(nuevoValor)
  }

  pop(){
    return this.pila.pop()
  }

  peek() {
    return this.pila[this.pila.length - 1]
  }

  size(){
    return this.pila.length
  }

  print(){
    console.log(`Pila Array: ${this.pila}`)
  }

}

let pilaEjercicio = new Pila()
pilaEjercicio.push('Manzana')
pilaEjercicio.push('Cebolla')
pilaEjercicio.push('Apio')
pilaEjercicio.push('Naranja')
pilaEjercicio.push('Papaya')
pilaEjercicio.push('Sandía')
pilaEjercicio.push('Melón')


function mifuncion(pila, numero){

}

mifuncion(pilaEjercicio, 4)

