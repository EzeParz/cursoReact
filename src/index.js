//1) Importamos librerias
import React from "react";
//la libreria React es la que define que es un componente y como funcionan juntos los componentes

import ReactDom from "react-dom/client";

//libreria que sabe como hacer que un componente aparezca en el navegador/pantalla

import App from "./App";

//2) Obtenes una referencia al div con id "root"
const el = document.getElementById("root");

//3)Le decimos a react que tome el control del elemento

//create root te permite crear una raiz para mostrar componentes en react



const root = ReactDom.createRoot(el);



root.render(<App />);
