import React from "react"; 
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./css/index.css";

const App = () => {
    return(
        <>
            <Navbar/>
            <Body/>
        </>
    )
}


ReactDOM.render(<App/>, document.getElementById("root"))