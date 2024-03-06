/* eslint-disable jsx-a11y/anchor-is-valid */
/* importa de la carpeta asset los iamgenes del codigo y ya en el css se dan las propiedades definidas con los stakehoklder*/
import React from 'react';
import './Hd.css';
import logo1 from '../Assets/Escudo_de_Colombia-logo-3544F5549B-seeklogo.com.png';
import logo2 from '../Assets/CSJ-01.png';


const Hd=()=> {
  return (
    <header>
      <img className="escudo" src={logo1} alt="Logo 1" /> 
      <nav className="nav-rectangulo">
        <ul>
          <li><a href="#">Quiénes somos</a></li>
          <li><a href="#">Ayuda</a></li>
          <li><a href="#">Dudas e inquietudes</a></li>
        </ul>
      </nav>
      <img className="CSJ" src={logo2} alt="Logo 2" /> 
    </header>
  );
}

export default Hd;