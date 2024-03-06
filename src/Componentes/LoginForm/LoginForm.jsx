/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* se crear div como contenedores de los elementos del proyecto*/ 
import React, { useState } from 'react'
import './LoginForm.css'
import { CiUser, CiLock  } from "react-icons/ci";

const LoginForm = ({ setIsLogin }) => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>LOGIN</h1>
            <div className="input-box">
                <h4>E-mail</h4>
                <input type="text" placeholder="E-mail" required/>
                <CiUser className='icon'/>
            </div>
            <div className="input-box">
                <h4>Contraseña</h4>
                <input type="password" placeholder="Contraseña" required/>
                <CiLock className='icon'/>
            </div>
            <div className="remember-forgot">  
                <a href="#">¿Olvido Contraseña?</a>
            </div>
            <div className='button-container'>
                <button type="submit">Sign-In</button>
                <button type="button" onClick={() => setIsLogin(false)}>Sign-Up</button>
            </div>
        </form>
    </div>
  )
}

export default LoginForm
