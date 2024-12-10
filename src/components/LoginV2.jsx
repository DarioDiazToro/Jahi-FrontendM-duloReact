import { useState } from 'react';
import React from "react";
import './../css/login.v2.css';
import { PeticionesHttp } from '../helpers/peticionesHttp';
import Swal from 'sweetalert2';
import Home from './Home';

const LoginV2 = () => {

    //!codigo de inicio de registrarse
    const [isSignInActive, setIsSignInActive] = useState(true);
    const [nombres, setNombres] = useState('');
    const [password, setPassword] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [email, setEmail] = useState('');

    const [usuario, setUsuario] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    const [logueado, setLogueado] = useState(false);

    const toggleForms = () => {
        setIsSignInActive(!isSignInActive);
        console.log("isSignInActive:", isSignInActive);
    };
    const primerNombreCorreo = usuario.split(" ").at(0);


    const cambiarUsuario = (event) => setNombres(event.target.value);
    const cambiarClave = (event) => setPassword(event.target.value);
    const cambiarApellidos = (event) => setApellidos(event.target.value);
    const cambiarEmail = (event) => setEmail(event.target.value);

    const crearUser = async () => {
        const objHttp = new PeticionesHttp();
        const re = await objHttp.post('/usuarios/register', {
            nombres,
            apellidos,
            activo: true,
            password,
            email,
        });

        if (!re.ok) {
            Swal.fire({
                title: 'Error!',
                text: re.mensaje,
                icon: 'error'
            });
        } else {
            Swal.fire({
                title: 'Usuario registrado con éxito',
                text: re.mensaje,
                icon: 'success'
            });
        }
    };


    //! Codigo de inicio de sesion

    const cambiarUsuarioLogin = (event) => {

        setUsuario(event.target.value);
    };

    const cambiarPasswordLogin = (event) => {
        setPasswordLogin(event.target.value);
    };




    const ingresar = async () => {
        console.log("ingresando");

        const objHttp = new PeticionesHttp();
        const re = await objHttp.post('/auth/login',
            {
                "email": usuario,
                "password": passwordLogin
            }
        );

        if (!re.ok) {
            Swal.fire({
                title: 'Error!',
                text: re.mensaje,
                icon: 'error'

            })
        } else {
            setLogueado(true);
            console.log(primerNombreCorreo);
            return Swal.fire({
                title: `Hola ${primerNombreCorreo}...`,
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


    if (logueado) {
        return <Home />;
    }

    return (
        <div>
            <div className={`container-form sign-up ${isSignInActive ? '' : 'active'}`}>
                <div className="welcome-back">
                    <div className="message">
                        <h2>Bienvenido a JAHI Entrenamiento y Nutrición</h2>
                        <p>Si ya tienes una cuenta, por favor inicia sesión aquí</p>
                        <button className="sign-up-btn" onClick={toggleForms}>Iniciar Sesión</button>
                    </div>
                </div>
                <form className="formulario">
                    <h2 className="create-account">Crear una cuenta</h2>
                    <div className="iconos">
                        <div className="border-icon"><i className="bx bxl-instagram"></i></div>
                        <div className="border-icon"><i className="bx bxl-linkedin"></i></div>
                        <div className="border-icon"><i className="bx bxl-facebook-circle"></i></div>
                    </div>
                    <p className="cuenta-gratis">Crear una cuenta gratis</p>
                    <input type="text" value={nombres} onChange={cambiarUsuario} placeholder="Nombres" />
                    <input type="text" value={apellidos} onChange={cambiarApellidos} placeholder="Apellidos" />
                    <input type="email" value={email} onChange={cambiarEmail} placeholder="Email" />
                    <input type="password" value={password} onChange={cambiarClave} placeholder="Contraseña" />
                    <input type="button" onClick={crearUser} value="Registrarse" />
                </form>
            </div>

            <div className={`container-form sign-in ${isSignInActive ? 'active' : ''}`}>
                <form className="formulario">
                    <h2 className="create-account">Iniciar Sesión</h2>
                    <div className="iconos">
                        <div className="border-icon"><i className="bx bxl-instagram"></i></div>
                        <div className="border-icon"><i className="bx bxl-linkedin"></i></div>
                        <div className="border-icon"><i className="bx bxl-facebook-circle"></i></div>
                    </div>
                    <p className="cuenta-gratis">¿Aún no tienes una cuenta?</p>
                    <input type="email" value={usuario} onChange={cambiarUsuarioLogin} placeholder="Email" />
                    <input type="password" value={passwordLogin} onChange={cambiarPasswordLogin} placeholder="Contraseña" />
                    <input type="button" onClick={ingresar} value="Iniciar Sesión" />
                </form>
                <div className="welcome-back">
                    <div className="message">
                        <h2>Bienvenido de nuevo</h2>
                        <p>Si aún no tienes una cuenta, por favor regístrate aquí</p>
                        <button className="sign-in-btn" onClick={toggleForms}>Registrarse</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginV2;
