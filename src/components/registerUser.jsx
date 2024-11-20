import { useState } from 'react'
import '../App.css'
import Home from './Home'
import { PeticionesHttp } from '../helpers/peticionesHttp'
import Swal from 'sweetalert2'


function RegisterUser() {
    const [nombres, setNombres] = useState();
    const [password, setPassword] = useState();
    const [apellidos, setApellidos] = useState();
    const [email, setEmail] = useState();




    const cambiarUsuario = (event) => {

        setNombres(event.target.value);
    };

    const cambiarClave = (event) => {
        setPassword(event.target.value);
    };



    const cambiarApellidos = (event) => {
        setApellidos(event.target.value);
    };

    const cambiarEmail = (event) => {
        setEmail(event.target.value);
    };

    const crearUser = async () => {
        console.log("ingresando");

        const objHttp = new PeticionesHttp();
        const re = await objHttp.post('/usuarios/register',
            {
                "nombres": nombres,
                "apellidos": apellidos,
                "activo": true,
                "password": password,
                "email": email
            }
        );

        if (!re.ok) {
            Swal.fire({
                title: 'Error!',
                text: re.mensaje,
                icon: 'error'

            })
        }else{
            Swal.fire({
                title: 'Usuario registrado con exito',
                text: re.mensaje,
                icon: 'info'
    
                })
        }

    };


    return (
        <>
            <h1>Registrarse</h1>
            <input placeholder='Nombres' type="text" name="usuario" id="usuario" value={nombres} onChange={cambiarUsuario} />
            <input placeholder='Password' type="password" name="password" id="password" value={password} onChange={cambiarClave} />
            <input placeholder='Apellidos' type="text" name="apellidos" id="apellidos" value={apellidos} onChange={cambiarApellidos} />
            <input placeholder='Email' type="email" name="email" id="email" value={email} onChange={cambiarEmail} />


            <button onClick={crearUser}> Crear usuario</button>
        </>
    )
};



export default RegisterUser
