import React from 'react';
import logo from "./components/img/logo.png"
import Carrito from "./components/img/Carrito.png"
import ProfileCard from "./components/ProfileCard";
import Frutas from "./components/Frutas";
import NavBar from './components/NavBar';
import Nav from "./components/Nav" 
import Nav2 from "./components/Nav2" 
import CarritoDise from './components/CarritoDise';


function App(){
     return(
      <nav style={Nav}>

      <a style={Frutas}>
      <ProfileCard style={Frutas.imagen} imagen={logo}/>
      </a>
      <div>
        <div style={Nav2}>
          <NavBar  sectores="Inicio"/>
          <NavBar  sectores="Productos" />
          <NavBar  sectores="Nosotros"/>
          <NavBar  sectores="Contacto"/>
        </div>
        {/* <a style={CarritoDise}>
          <Carrito style={CarritoDise.imagen} imagen={Carrito}/>
          </a> */}
      </div>

      </nav>
     )
    
}

  
export default App;