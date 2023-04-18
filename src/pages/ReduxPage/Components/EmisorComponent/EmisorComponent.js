import React from 'react'
import { useDispatch } from 'react-redux';
import { createMensaje } from '../../../../redux/slices/mensaje';

const EmisorComponent = () => {

    //necesito el dispatcher para  ejecutar una accion
    const dispatcher = useDispatch();
    
    const emitirMensaje = () => {
        dispatcher(createMensaje('hola mundo en redux'));
    }

    return (
        <>
            <h1>Emisor Component</h1>
            <button onClick={emitirMensaje}>
                Emite mensaje
            </button>
        </>
    )
}

export default EmisorComponent