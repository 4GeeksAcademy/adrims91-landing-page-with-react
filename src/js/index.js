//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import App from './component/app'

//render your react application
const app = ReactDOM.createRoot(document.getElementById('app'));
app.render(
    <App />
)
    