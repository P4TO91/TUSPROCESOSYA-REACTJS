import React, { useState } from 'react';
import LoginForm from './Componentes/LoginForm/LoginForm';
import Registro from './Componentes/Registro/Registro';
import Hd from './Componentes/Header/Hd';
import Ft from './Componentes/Footer/Ft';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <Hd/>
      {isLogin ? <LoginForm setIsLogin={setIsLogin}/> : <Registro/>} 
      <Ft/>
    </div>
  );
}

export default App;

/* Con el import LoginForm se crea condicional para hacer cambio de interface de login a registro cuando sea true onclick en el button registra; este mismo principio va a funcionar para los demas interfaces */
