import React from 'react';
import ReactDOM from 'react-dom/client';

// Agregar bootstrap desde node_modules
import 'bootstrap/dist/css/bootstrap.min.css'; // Estilos de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle'; // Javascript de Bootstrap

// Agregar font-awesome
import '@fortawesome/fontawesome-free/css/all.min.css';

import App from './App'

ReactDOM.createRoot(document.querySelector('#root')).render(<App />);