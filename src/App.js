import React from 'react';
import { useState } from 'react';

import './App.css';
import Persona from './Components/Persona';
import Turnos from './pages/turnos/Turnos';

/*props!!!*/
function App(props) {

  const title = props.title;

  console.log(title);

  //estado: uso de hooks
  const [visible, setVisible] = useState(true);
  const [persona, setPersona] = useState(undefined);

  const cambiarVisibilidad = () => {
    //si vamos a cambiar valores primitivos: number, boolean
    //podemos pasar el valor, pero si vamos a modificar o setear un objeto
    //debo hacerlo por medio de una funcion
    setVisible(!visible);
  }

  const cambiarPersona = () => {
    const obj = { id: 2, name: 'juan' };
    setPersona((prev) => obj);
  }

  return (
    <>
      {visible ?
        <>
          <h1>Hola</h1>
          <p>que tal</p>
          {title}
        </>
        :
        <h2>
          NO se puede mostrar nada!!!
        </h2>
      }
      <div>
        <button onClick={cambiarVisibilidad}>
          Cambiar
        </button>
      </div>
      <hr></hr>
      <div>
        <Persona persona={persona}/>
        <button onClick={cambiarPersona}>
          Cambiar
        </button>
      </div>
        {/* <Persona persona={persona}/>         */}
        <Turnos/>
    </>
  );
}

export default App;
