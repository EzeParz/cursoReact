import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Productos from "./pages/Productos";
import Nosotros from "./pages/Nosotros";


function Prueba (){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="Inicio" element={<Inicio/>}/>
                <Route path="Productos" element={<Productos/>}/>
                <Route path="Nosotros" element={<Nosotros/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Prueba;