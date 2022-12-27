import React from 'react';
import ReactDOM from 'react-dom/client';

// IMP bootstrap desde node_modules
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

// IMP font-awesome
import '@fortawesome/fontawesome-free/css/all.min.css';

// IMP CSS 
import "./styles/style.css"

//COMPONENT VIEW
import MytoDoList from "./components/mytodolist.jsx"

ReactDOM.createRoot(document.querySelector('#root')).render(<MytoDoList />);

