import React from 'react';
import ReactDOM from 'react-dom/client';

// IMP bootstrap desde node_modules
import 'bootstrap/dist/css/bootstrap.min.css'; // Estilos de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle'; // Javascript de Bootstrap

// IMP font-awesome
import '@fortawesome/fontawesome-free/css/all.min.css';


//COMPONENTE VIEW
import TheCounter from "./components/counter.jsx"

ReactDOM.createRoot(document.querySelector('#root')).render(<TheCounter />);