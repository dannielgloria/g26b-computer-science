// Definimos la clase
class Persona {
    constructor(nombre, apellido, edad, generoMuscial, genero){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.generoMuscial = generoMuscial;
        this.genero = genero;
    }

    // hacemos los metodos
    hablar(){
        console.log("Que onda! soy " + this.nombre + " vamos por unas tortas, te late?");
    }

    /**
     * The function calculates a fun fact about the age of the person and prints it to the console.
     */
    decirDatoCurioso(){
        var resultado = (this.edad/2)*56;
        console.log("Sabian que mi edad dividida entre 2 multiplicada por 56 es igual a " + resultado);
    }
}

// Crear objeto
const person1 = new Persona("Juan","Paco pedro de la mar",23,"Cumbias sonideras","Masculino");
const person2 = new Persona("Fulano","De tal",33,"Rock","Masculino");

person1.hablar();
person1.decirDatoCurioso();

person2.hablar();
person2.decirDatoCurioso();

console.log(person1);

console.log(person2);