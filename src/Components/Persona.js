import { useEffect, useState } from 'react';
import styles from './Persona.module.css';
import ListadoCometarios from './ListadoComentarios';

//PROPS
function Persona(props) {
    
    //consulta al back! 
    
    //estados => si vimos useState SI
    const [comentarios,setComentarios] = useState([]);//inicia como un array vacio
    const [count,seCount] = useState(0);

    //estamos viendo useEffect 
    useEffect(() => {
        //forma 1        
        console.log('FORM 1: SE EJECUTA SIEMPRE');
    });

    useEffect(() => {
        //forma 2
        console.log('FORMA 2: SE EJECUTA UNA SOLA VEZ, ES IDEAL HACER UNA  CARGA INICIAL DE DATOS');
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(data => setComentarios(data)) //acá es donde actualizo 
    },[]);

    useEffect(() => {
        //forma 3
        console.log('FORMA 3: SE EJECUTA CUANDO ALGUN ESTADO ES PARTICULAR CAMBIA');
    },[count]); //0 > 1 > 2 > 3

    const changeState = () => {
        seCount(count + 1);
    }
    //se cambia alguna estado se ejecuta nuevamente el render
    return(
        <>
            <span>cont: {count}</span>
            <button onClick={changeState}>
                Add Person
            </button>
            { comentarios.length > 0 && 
                <ListadoCometarios comentarios={comentarios}/>
            }
        </>
    );

}

export default Persona;