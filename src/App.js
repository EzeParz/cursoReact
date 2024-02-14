import React from 'react';
import ProfileCard from "./components/ProfileCard";
import Arandanos from "./components/img/Arandanos.png";
import Frutilla from "./components/img/Frutilla.png";
import FrutosRojos from "./components/img/frutosrojos.jpg"
import {Frutas, FrutasTama} from "./components/Frutas"

function App(){
     return(
      <div style={Frutas}>
      <h1> Frutas </h1>
        <div style={Frutas}>
          <ProfileCard style={FrutasTama.imagen} titulo="Arandanos" parrafo="Ricos y Saludables" imagen={Arandanos}/>
          <ProfileCard style={FrutasTama.imagen} titulo="Frutilla" parrafo="Ricos y Saludables" imagen={Frutilla}/>
          <ProfileCard style={FrutasTama.imagen} titulo="Frutos Rojos" parrafo="Ricos y Saludables" imagen={FrutosRojos}/>  
        </div>
      </div>
     )
    
}

  
export default App;