/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './RegistroForm.css'


const Registro = () => {
  return (
    <div className='wrapper-registro'>
        <form action="">
            <h1>Registro De Usuario</h1>
            <div className='row'>
                <div className="input-registro">
                    <input type="text" placeholder="Nombres" required/>
                </div>
                <div className="input-registro">
                    <input type="text" placeholder="Apellidos" required/>
                </div>
                <div className="input-registro">
                    <input type="text" placeholder="Tipo de identificacion" required/>
                </div>
                <div className="input-registro">
                    <input type="text" placeholder="Ingrese Numero" required/>
                </div>
            </div> 
            <div className='row'>   
                <div className="input-registro">
                    <input type="text" placeholder="E-mail" required/>
                </div>
                <div className="input-registro">
                    <input type="text" placeholder="Apoderado o Litigante" required/>
                </div>
                <div className="input-registro">
                    <input type="text" placeholder="Tarjeta Profesional" required/>
                </div>
                <div className="input-registro">
                    <input type="text" placeholder="Pais de origen" required/>
                </div>
            </div>
            <div className='row'>   
                <div className="input-registro">
                    <input type="text" placeholder="Pais de Residencia" required/>
                </div>
            </div>
            <button className="button-registro" type="submit">REGISTRARME</button>
        </form>
    </div>
  )
}

export default Registro