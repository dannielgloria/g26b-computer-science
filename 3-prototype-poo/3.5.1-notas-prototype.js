// sugar syntaxys es6
class, constructor, extends, super

// es5
prototype, __proto__, object.create

var dany = {
    name: 'dany',
    darAsesorias: function() {
        console.log(this.name)
    }
};

var montoya = {
    name: 'montoya',
    darAsesorias: function() {
        console.log(this) // dany
    }
};

var wen = {
    name: 'wen',
    darAsesorias: () => {
        console.log(this) // window
    }
};

const suma = () => {};

dany.darAsesorias(); // dany
montoya.darAsesorias(); // montoya

// funcion flecha
() => {} // NO OK this.name

// funcion flecha
function() => {} // OK this.name = quien me mando llamar (dany o montoya)

bind, call, apply // cambiar el contexto this
