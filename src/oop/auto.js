class Vehiculo {
    constructor(ruedasQueVienenDesdeAfuera) {
        this.cantidadRuedas = ruedasQueVienenDesdeAfuera;
    }
    obtenerCantidadRuedas() {
        return this.cantidadRuedas;
    }
}

//la herencia se hace con paralabra reservada "extends"
class Auto extends Vehiculo {
    //atributos!!!
    constructor(marca, cantidadRuedas) {
        if(!cantidadRuedas){
            cantidadRuedas = 4;
        }
        //primero invocar el constructor del padre
        super(cantidadRuedas);//de fabrica tienen 4
        
        //setear todos los atributos del hijo (Auto)
        this.marca = marca;
    }
    obtenerMarca () {
        console.log('ejecutando obtenerMarca()')
        return this.marca;
    }
}

//main!!!
//crear un objeto de la clase auto
const obj1 = new Auto('ford');
const obj2 = new Auto('renault');
const objN = new Auto('marcaN',3);

//obtener por medio del metodo obtenerMarca() la marca de cada uno 
//de los objetos
console.log(obj1.obtenerMarca(), obj1.obtenerCantidadRuedas());
console.log(obj2.obtenerMarca(), obj2.obtenerCantidadRuedas());
console.log(objN.obtenerMarca(), objN.obtenerCantidadRuedas());

//ahora 