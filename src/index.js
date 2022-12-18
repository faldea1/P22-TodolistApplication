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
import TheCounter from "./components/counter.jsx"

let counter = 0;
setInterval(function(){
    const six = Math.floor(counter/10000);
    const five = Math.floor(counter/10000);
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);
    console.log(six, five, four, three, two, one);
    counter= counter + 1;

    
ReactDOM.createRoot(document.querySelector('#root')).render(<TheCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six} />);


},1000);


// Duda a resolver - Contador funciona visualmente, pero render arroja warning en console.

