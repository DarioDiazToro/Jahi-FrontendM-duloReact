import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./paginaInicio";

function App() {
  const [usuario, setUsuario] = useState();
  const [password, setPassword] = useState();
  const [logueado, setLogueado] = useState(false);
  const cambiarUsuario = (event) => {

    setUsuario(event.target.value);
  };

  const cambiarClave = (event) => {
    setPassword(event.target.value);
  };




  const ingresar = () => {
    if (usuario == "admin" && password == "admin") {
      alert("Iniciando sesion...");
      setLogueado(true);

    } else {
      alert("Usuario o Contraseña incorrectos");
    }
  };

  if (logueado) {
    return <PaginaInicio />
  };

  return (
    <>
      <h1>Iniciar Sesion</h1>
      <input placeholder='Usuario' type="text" name="usuario" id="usuario" value={usuario} onChange={cambiarUsuario} />
      <input placeholder='Password' type="password" name="password" id="password" value={password} onChange={cambiarClave} />
      <p>¿Olvidastes la contraseña?</p>
      <button onClick={ingresar}> Iniciar Sesion</button>
    </>
  )


}

export default App
