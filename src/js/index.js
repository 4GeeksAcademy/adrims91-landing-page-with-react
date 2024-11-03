//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import NavBar from "./component/NavBar";
const menu = [
    {label: 'Home', url: '#', extraClass: 'text-white'},
    {label: 'About', url: '#', extraClass: 'text-white-50'},
    {label: 'Services', url: '#', extraClass: 'text-white-50'},
    {label: 'Contact', url: '#', extraClass: 'text-white-50'}
]

//render your react application
const app = ReactDOM.createRoot(document.getElementById('app'));



app.render(<NavBar
    items={menu}
    brand={'Start Bootstrap'}
    brandUrl={'#'}
/>)
    