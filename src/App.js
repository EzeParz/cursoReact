import React from 'react';
import logo from "./components/img/logo.png"
import ProfileCard from "./components/ProfileCard";
import Frutas from "./components/Frutas";
import NavBar from './components/NavBar';  


function App(){
     return(
      <nav>

      <a style={Frutas}>
      <ProfileCard style={Frutas.imagen} imagen={logo}/>
      </a>
      <div>
        
      </div>


        /* <div style={Frutas}>
          {/* <ProfileCard style={Frutas.imagen} titulo="Arandanos" parrafo="Ricos y Saludables" imagen={Arandanos}/>
          <ProfileCard style={Frutas.imagen} titulo="Frutilla" parrafo="Ricos y Saludables" imagen={Frutilla}/>
          <ProfileCard style={Frutas.imagen} titulo="Frutos Rojos" parrafo="Ricos y Saludables" imagen={FrutosRojos}/> */}  
        </div> */
      </nav>
     )
    
}

  
export default App;