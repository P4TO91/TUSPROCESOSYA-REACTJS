/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Ft.css';
import logo3 from '../Assets/CorteSupremaJusticia.png';

const Ft=()=> {
  return (
    <footer className='footer'>
      <div class="texto-encima-footer">
                <p>De acuerdo a la legislación Colombiana y normatividad vigente, se le informa al usuario que la presente plataforma solo es de consulta de sus procesos. Por lo tanto, no se brinda consejos o sugerencias legales sobre los mismos; es
                   importante fundamentar que el objetivo de la plataforma es solo brindar cumplimiento del Decreto 806 del 2021 y ley 2213 del 2022 que van alineados con los derechos fundamentales de acceso a la justicia Articulo 229 y acceso a la 
                   informacion articulo 24 de la constitucion Politica de Colombia (CP) de 1991. Las acciones o recursos legales a tomar son menester de su apoderado legal y si no lo tiene es recomendable buscarse un abogado de confianza o si no tiene los 
                   recursos para pagarlo, le sugerimos acercarse a la centros universitarios de derecho o casas de justicia donde podra conseguir un apoderado Ad-Honorem. Lo mas importante es ejercer su derecho fundamental a la justicia Articulo 229 y debido Proceso Articulo 29 (CP).
                </p>
      </div>
      <img className="CorteSupremaJusticia" src={logo3} alt="Logo 3" /> 
    </footer>
  );
}

export default Ft;