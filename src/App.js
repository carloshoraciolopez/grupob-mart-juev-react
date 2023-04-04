import React from 'react';
import { useState } from 'react';

import './App.css';
import Persona from './Components/Persona';

function App(props) {

  const [persona, setPersona] = useState(undefined);

  return (
    <>
        <Persona persona={persona}/>        
    </>
  );
}

export default App;
