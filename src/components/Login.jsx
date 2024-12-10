import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../css/login.css'
import Home from './Home'
import { PeticionesHttp } from '../helpers/peticionesHttp'
import Swal from 'sweetalert2'


function Login() {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [logueado, setLogueado] = useState(false);
    const cambiarUsuario = (event) => {

        setUsuario(event.target.value);
    };

    const cambiarClave = (event) => {
        setPassword(event.target.value);
    };




    const ingresar = async () => {
        console.log("ingresando");

        const objHttp = new PeticionesHttp();
        const re = await objHttp.post('/auth/login',
            {
                "email": usuario,
                "password": password
            }
        );

        if (!re.ok) {
            Swal.fire({
                title: 'Error!',
                text: re.mensaje,
                icon: 'error'

            })
        } else {
            Swal.fire({
                title: 'Usuario Logueado!',
                text: re.mensaje,
                icon: 'info'

            });

        }

        // if (usuario == "admin" && password == "admin") {
        //     alert("Iniciando sesion...");
        //     setLogueado(true);

        // } else {
        //     alert("Usuario o Contraseña incorrectos");
        // }



    };



    return (
        <>
            <div></div>
            <h1>Iniciar Sesion</h1>
            <input placeholder='Email' type="text" name="usuario" id="usuario" value={usuario} onChange={cambiarUsuario} />
            <input placeholder='Password' type="password" name="password" id="password" value={password} onChange={cambiarClave} />
            <p> <a className='link-password' href="#">¿Olvidastes la contraseña?</a></p>
            <button onClick={ingresar}> Iniciar Sesion</button>
        </>
    )


}

export default Login
