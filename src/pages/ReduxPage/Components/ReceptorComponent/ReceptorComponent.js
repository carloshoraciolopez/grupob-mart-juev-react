import React, {useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateMensaje } from '../../../../redux/slices/mensaje';

const ReceptorComponent = () => {
    // const[txt,setTxt] = useState('');
    const refText = useRef('');

    const mensajeState = useSelector(
        (store) =>  store.mensaje
    );
    
    //disapth ??
    const dispatcher = useDispatch();

    const emitir = () => {
        debugger;
        console.log(refText.current.value);
        dispatcher(updateMensaje({'mensaje': refText.current.value}))
    }

    return (
        <div>
            <h1>Receptor</h1>
            <span>Mensaje: {mensajeState.mensaje}</span>
            <br/>
            <input ref={refText}>
            </input>
            <button onClick={emitir}>
                Enviar nuevo menasje
            </button>
        </div>
    )
}

export default ReceptorComponent