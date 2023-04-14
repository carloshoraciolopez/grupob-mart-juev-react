    import React, { useState } from 'react'

    const Form = (props) => {
        
        const {data} = props;
        const [form,setForm] = useState({});

        const validate = () => {
            if(!form?.nombre) return "Ingrese nombre";
            if(!form?.tyc) return "Complete TYC";
        }

        const isValid = validate();

        const handleSubmit = (e) => {
            e.preventDefault();
            
        }

        const handleChange = (e) => {
            debugger;
            setForm({
                ...form,
                [e.target.name]: e.target.value,
            })
        }
        const handleChangeChecked = (e) => {
            setForm({
                ...form,
                [e.target.name]: e.target.checked,
            })
        }

        return (
            <>
                <form onSubmit={handleSubmit}>
                    <div>
                        <h3>Input</h3>
                        <label htmlFor="nombre">Nombre: </label>
                        <input type="text"
                            id="nombre"
                            value={form.nombre}
                            name="nombre" 
                            onChange={(e) => handleChange(e)}
                            />
                    </div>
                    <div>
                        <h3>checkbox</h3>
                        <label htmlFor="nombre">TyC: </label>
                        <input type="checkbox"
                            id="c"
                            value={form.tyc}
                            name="tyc" 
                            onChange={(e) => handleChangeChecked(e)}
                            />
                    </div>
                    <button type="submit" disabled={isValid}>
                        Enviar
                    </button>
                </form>
            </>
            // consumir https://reqres.in/api/users/2
            // agregar los elementos html para mostrar los datos en un form*/
            // actualizar la funcion que habilita el submit Enviar
        )
    }

    export default Form;