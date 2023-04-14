import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Form from './pages/formulario/Formularios';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    // <App title={'Clase1 React'}/>
    <Form 
      data={
        { 
          nombre:'carlos',
          edad:37
        }
      }
      />
  // </React.StrictMode>
);

