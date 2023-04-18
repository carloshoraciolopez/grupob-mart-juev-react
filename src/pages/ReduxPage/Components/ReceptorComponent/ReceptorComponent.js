import React from 'react'
import { useSelector } from 'react-redux'

const ReceptorComponent = () => {
    
    const mensajeState = useSelector(
        (store) =>  store.mensaje
    );
    
    return (
        <div>
            <h1>Receptor</h1>
            <span>Mensaje: {mensajeState.mensaje}</span>
        </div>
    )
}

export default ReceptorComponent