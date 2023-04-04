function Dominio (props) {
    const {dominio} = {props}

    return (
        <>
            <li key={dominio.clave}>{dominio.clave} {dominio.valor}</li>
        </>
    )
}

export default Dominio;
