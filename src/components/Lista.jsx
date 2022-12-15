import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ButtonBorrar from './ButtonBorrar';


/* const ButtonBorrar = ({ onClick }) => {
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
} */

const Lista = ({ nombres, show, setShow, setNombres }) => {
    return (
        <>
            {
                nombres.length === 0 && (
                    <div className="alert alert-danger" role="alert">
                        Listado de Nombres Varios
                    </div>
                )
            }
            <ul className='list-group'>
                {
                    nombres.length > 0 ?
                        nombres.map((nombre, index) => {
                            return (
                                <li key={index} className={"list-group-item " + (index === 0 ? "active" : null)}>{nombre}</li>
                            )
                        })
                        : (
                            <li className='list-group-item'>No hay nombres en el listado</li>
                        )
                }
            </ul>
            <button className='btn btn-info btn-sm my-3' onClick={() => setShow(!show)}>Cambiar Valor de Show: {show ? "verdadero" : "falso"}</button>


            {show === true && (
                <ButtonBorrar onClick={() => setNombres([])} />
            )}
        </>
    )
}

Lista.defaultProps = {
    nombres: ["Hugo", "Paco", "Luis"],
    show: false,
    setShow: function () { alert('Funcion no encontrada') }
}

Lista.propTypes = {
    nombres: PropTypes.array.isRequired,
    show: PropTypes.bool,
    setShow: PropTypes.func
}

export default Lista;