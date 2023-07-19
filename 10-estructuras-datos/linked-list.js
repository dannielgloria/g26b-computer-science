// Definición del nodo
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Definición de la lista enlazada
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Método para agregar un elemento al final de la lista
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Método para imprimir los elementos de la lista
  print() {
    let current = this.head;
    const elements = [];

    while (current) {
      elements.push(current.value);
      current = current.next;
    }

    console.log(elements.join(' -> '));
  }
}

// Ejemplo de uso
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(34);
list.append(38);
list.print(); // Salida: 1 -> 2 -> 3