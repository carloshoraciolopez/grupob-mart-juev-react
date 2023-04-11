import styles from './Persona.module.css';
<<<<<<< Updated upstream
=======
import ListadoCometarios from '../pages/comentarios/ListadoComentarios';
>>>>>>> Stashed changes

function Persona(props) {

    //const persona = props.persona;

    //desestruturacion de objetos
    const { persona } = props;
    
    return(
        <div className={styles.personaContainer}>
            <h3>Datos de persona:</h3>
            <p>{persona?.id}</p>
            <p>{persona?.name}</p>
        </div>
    );

}

export default Persona;