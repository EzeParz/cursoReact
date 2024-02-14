import React from 'react';
import logo from "./components/img/logo.png"
import CarritoPng from "./components/img/CarritoPng.png"
import ProfileCard from "./components/ProfileCard";
import Frutas from "./components/Frutas";
import NavBar from './components/NavBar';
import Nav from "./components/Nav" 
import Nav2 from "./components/Nav2" 
import CarritoDise from './components/CarritoDise';
import Carrito from './components/Carrito';


function App(){
     return(
       

      <nav style={Nav}>

      <a style={Frutas}>
      <ProfileCard style={Frutas.imagen} imagen={logo}/>
      </a>
      <div style={Nav2}>
        <div style={Nav2}>
          <NavBar  titulo="Inicio"/>
          <NavBar  titulo="Productos" />
          <NavBar  titulo="Nosotros"/>
          <NavBar  titulo="Contacto"/>
        </div>
        <a>
          <div style={CarritoDise} >
            <Carrito style={CarritoDise.imagen} imagen={CarritoPng}/>
          </div>
        </a>
      </div>

      </nav>
     )
    
}

  
export default App;