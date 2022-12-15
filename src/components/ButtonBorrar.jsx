import React, { useEffect } from 'react';

const ButtonBorrar = ({ onClick }) => {
    useEffect(() => {
        console.log("Cargando Componente...")


        return () => {
            console.log("Componente Eliminado...")
        }

    }, [])
    return (
        <button className='btn btn-danger btn-sm' onClick={onClick}>
            Borrar
        </button>
    )
}

export default ButtonBorrar;