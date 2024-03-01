import React, { useState } from 'react';
import logo from "./components/img/logo.png"
import CarritoPng from "./components/img/CarritoPng.png"
import ProfileCard from "./components/ProfileCard";
import Frutas from "./components/Frutas";
import NavBar from './components/NavBar';
import Nav from './components/Nav';
import Nav2 from "./components/Nav2" 
import CarritoDise from './components/CarritoDise';
import Carrito from './components/Carrito';
import CarritoDise1 from "./components/CarritoDise1"
import SearchBar from "./components/SearchBar";
import SearchImages from "./SearchImages"
import ImageList from "./components/ImageList"

import "bulma/css/bulma.css"


function App(){
      

  const [img, setImg] = useState ([]);

  const handleSubmit = async (term)=>{

    const resultado = await SearchImages(term);
    setImg(resultado);

  }





     return(
       

      <><nav>
         <section className='hero is-primary'>
           <div style={Nav}>
             <a style={Frutas}>
               <ProfileCard style={Frutas.imagen} imagen={logo} />
             </a>
             <article style={Nav2}>
               <div style={Nav2}>
                 <NavBar titulo="Inicio" titulo2="Productos" titulo3="Nosotros" titulo4="Contacto" />
               </div>
               <a style={CarritoDise1}>
                 <div style={CarritoDise}>
                   <Carrito style={CarritoDise.imagen} imagen={CarritoPng} />
                 </div>
               </a>
             </article>
           </div>
         </section>

       </nav>
       <main>
          <div>
            <SearchBar enSubmit={handleSubmit} />
            <ImageList images={img}/>
          </div>
       </main></>

     )
    
}

  
export default App;