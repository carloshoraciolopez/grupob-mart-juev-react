import { useEffect, useState } from "react";
import Dominio from "./components/Dominio";

function ListadoCometarios(props) {
    //[]
    const { comentarios } = props;
    
    //guardar los dominios con la cantidad de comentarios
    const [dominios,setDominios] = useState([]);
    
    useEffect(()=>{
        const map = new Map();  
        //const extension = email.match(/\.([^.]+)$/)[1];
        const emails = comentarios.map(c => {
            const email = c.email.split('@')[1];
            const idx = email.indexOf('.');
            return email.substr(idx, email.length);
        });
        
        //cargar el mapa
        emails.forEach(e => {
            if(!map.has(e)) {
                map.set(e, 1);//.biz > 1
            }else {
                let cantXDomio = map.get(e);
                map.set(e,cantXDomio+1);
            }
        });

        setDominios(Array.from(map.entries(), ([clave, valor]) => (
            { clave, valor }
        )));

        console.log('dominios',dominios);
    },[]);

    return (
        <>
            <ul>
                {
                    dominios.length > 0 && dominios.map(d => {
                        return <Dominio key={d.clave} dominio={d}/>
                    }
                    )
                }
            </ul>
        </>
    );
}

export default ListadoCometarios;