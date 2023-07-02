import React from "react";
import FichaMedica from "./components/FichaMedica";
import Register from "./components/Register";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import Home from "./components/Home"
import HistorialFichas from "./components/HistorialFichas";
 

import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

 

function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>     
                    <Route path="/Home" element={<Home/>} />
                    <Route path="/Historial" element={<HistorialFichas/>} />
                    <Route path="/addficha" element={<FichaMedica/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/welcome" element={<Welcome/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};
 
export default App;
