import React, { useEffect, useState } from 'react'
import UploadFile from './UploadFile';

const Formularios = () => {
    const [lenguaje,setLenguaje] = useState('');
    const [helado,setHelado] = useState('');
    const [tyc,setTyc] = useState(false);
    const [nombre,setNombre] = useState('');
    const [comentarios,setComentarios] = useState('');

    const validateForm = () => {
        if(!tyc) return "Debe   completar el tyc";
    }

    const validated = validateForm();

    const handleSubmit = (e) => {
        e.preventDefault();
    }   

    useEffect(()=>{
        console.log(validated);
    });

    return (
        <>
            <h1>Formularios</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <h2>Input</h2>
                    <label htmlFor='nombre'>Nombre:</label>
                    <input type="text" 
                        name="nombre"                         
                        onChange={(e) => setNombre(e.target.value)}/>
                </div>
                <div>
                    <h2>Radio</h2>
                    <input type="radio"
                        name="lenguaje"
                        id="js"
                        value="js"
                        defaultChecked
                        onChange={(e) => setLenguaje(e.target.value)}/>
                    <label>Javascript</label>
                    <input type="radio"
                        name="lenguaje"
                        id="java"
                        value="java"
                        onChange={(e) => setLenguaje(e.target.value)}/>
                    <label>Java</label>
                    <input type="radio"
                        name="lenguaje"
                        id="angular"
                        value="angular"
                        onChange={(e) => setLenguaje(e.target.value)}/>
                    <label>Angular</label>
                    <input type="radio"
                        name="lenguaje"
                        id="react"
                        value="react"
                        onChange={(e) => setLenguaje(e.target.value)}/>
                    <label>React</label>
                </div>
                <div>
                    <h2>Select</h2>
                    <select name="helado" 
                        defaultValue={''}
                        onChange={(e) => setHelado(e.target.value)}>
                        <option value="">--</option>
                        <option value="vainilla">Vainilla</option>
                        <option value="chocolate">Chocolate</option>
                        <option value="higo">Higo</option>
                    </select>
                </div>
                <div>
                    <h2>Checkbox</h2>
                    <input type="checkbox"
                        id="tyc"
                        name="tyc"
                        value={tyc}
                        onChange={(e) => setTyc(e.target.checked)}
                    />
                    <label htmlFor='tyc'>Terminos y Condiciones</label>
                </div>
                <div>
                    <h2>TextArea</h2>
                    <div>
                        <label htmlFor='comentario'>Comentario:</label>
                    </div>
                    <textarea
                        name="nombre"                         
                        onChange={(e) => setComentarios(e.target.value)}
                        cols={100}
                        rows={3}
                        />
                    <p>Cantidad de palabras: {comentarios.length} </p>
                </div>
                <button type="submit" disabled={validated}>
                    Enviar
                </button>
        </form >
        <hr/>
        <UploadFile/>
    </>
  )
}

export default Formularios