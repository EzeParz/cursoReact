import React from 'react';
import logo from "./components/img/logo.png"
import Carrito from "./components/img/Carrito.png"
import ProfileCard from "./components/ProfileCard";
import Frutas from "./components/Frutas";
import NavBar from './components/NavBar';
import Nav from "./components/Nav" 
import Nav2 from "./components/Nav2" 
import CarritoDiseño from './components/CarritoDiseño';


function App(){
     return(
      <nav style={Nav}>

      <a style={Frutas}>
      <ProfileCard style={Frutas.imagen} imagen={logo}/>
      </a>
      
      <div style={Nav2}>
        <NavBar  sectores="Inicio"/>
        <NavBar  sectores="Productos" />
        <NavBar  sectores="Nosotros"/>
        <NavBar  sectores="Contacto"/>
        <Carrito style={CarritoDiseño.imagen} imagen={Carrito}/>
      </div>


      </nav>
     )
    
}

  
export default App;