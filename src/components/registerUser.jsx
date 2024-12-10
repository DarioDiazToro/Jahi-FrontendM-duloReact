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
        } else {
            Swal.fire({
                title: 'Usuario registrado con exito',
                text: re.mensaje,
                icon: 'info'

            })
        }

    };


    return (
        <>
            (
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
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Contraseña" />
                        <input type="button" value="Iniciar Sesión" />
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
        </>
    )
};



export default RegisterUser
