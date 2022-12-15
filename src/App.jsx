import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import Lista from './components/Lista';

export default function App(props) {
    const [nombres, setNombres] = useState([
        "Hugo",
        "Paco",
        "Luis"
    ])

    const [show, setShow] = useState(false);
    return (
        <>
            <h1 className='text-center text-primary'>HOLA DESDE CREATE-REACT-APP</h1>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button <FaEye />
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action <i className="fa-brands fa-html5"></i></a></li>
                    <li><a className="dropdown-item" href="#">Another action <i className="fa-brands fa-css3"></i></a></li>
                    <li><a className="dropdown-item" href="#">Something else here <i className="fa-brands fa-js"></i></a></li>
                </ul>
                <Lista nombres={nombres} show={show} setShow={setShow} setNombres={setNombres} />
            </div>
        </>
    )
}