import React from "react";
import ReactDOM from "react-dom";

const fName = "Edgar";
const lName = "Gómez";

const fechaActual = new Date();
const año = fechaActual.getFullYear();

const lucky = 7;

ReactDOM.render(
  <div>
    <h1>Hola {fName + " " + lName}</h1>
    <h2>Mis mascotas</h2>
    <ul>
      <li>Tanque</li>
      <li>Russell</li>
      <li>Miau</li>
    </ul>
    <p>Tu número de la suerte es: {lucky}</p>
    <p>Creado por : {fName + " " + lName}.</p>
    <p>Copyright {año}.</p>
  </div>,
  document.getElementById("root")
);
