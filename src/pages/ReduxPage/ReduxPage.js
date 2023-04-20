import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetMensaje } from '../../redux/slices/mensaje'
import EmisorComponent from './Components/EmisorComponent/EmisorComponent';
import ReceptorComponent from './Components/ReceptorComponent/ReceptorComponent';
import Resource from './Resource/Resource';

const ReduxPage = () => {

    const mensajeState = useSelector((store) => store.mensaje);

    const dispatcher = useDispatch();
    
    const limpiarMensajes = () => {
        dispatcher(resetMensaje());
    }

    return (
        <>
            <EmisorComponent/>
            <hr/>
            <ReceptorComponent/>
            <hr/>
            <b>Redux Page:</b> <span>Mensaje from redux {mensajeState.mensaje}</span>
            <button onClick={limpiarMensajes}>
                Reset
            </button>
            <br/>
            <Resource/>
        </>        
    )
}

export default ReduxPage;