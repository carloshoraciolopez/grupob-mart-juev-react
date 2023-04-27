class IMensaje {
    enviar(mensaje) {
        throw new Error('Método no implementado en la "interface"');
    }
}

class WhatsAppMensaje extends IMensaje {
    constructor(){
        super();
    }
    //o.o.p: polimorfimos / override
    enviar(mensaje) {
        console.log(`Enviando mensaje por whatsapp ${mensaje}`);
    }
}
class FSMensaje extends IMensaje {
    constructor(){
        super();
    }
    //o.o.p: polimorfimos / override
    enviar(mensaje) {
        console.log(`Grabando mensaje en FS ${mensaje}`);
    }
}
class EmailMensaje extends IMensaje {
    constructor(){
        super();
    }
    //o.o.p: polimorfimos / override
    enviar(mensaje) {
        console.log(`Enviando mensaje por email ${mensaje}`);
    }
}

class EnviadorDeMensaje {
    constructor(medio) {
        this.medio = medio
    }
    getMedio() {
        return this.medio;
    }
}

const env = 'em';
//fallo es sistema, debo mirar la variable de entorno
//y crear una instancia 
let mensajero;

if(env === 'wh') {
    mensajero = new EnviadorDeMensaje(
        new WhatsAppMensaje()
    );
}else if(env === 'fs') {
    mensajero = new EnviadorDeMensaje(
        new FSMensaje()
    );
} else if(env === 'em') {
    mensajero = new EnviadorDeMensaje(
        new EmailMensaje()
    );
} else {
    //exceptions: corta el flujo
    throw new Error('NO HAY MEDIO PARA ENVIAR EL MENSAJE');
}

//estoy seguro que hay un mensajero
mensajero.getMedio().enviar('Error en alguna lugar del sistema avisando...');