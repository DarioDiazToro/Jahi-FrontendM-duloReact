import { useState } from 'react'
import { PeticionesHttp } from "../helpers/peticionesHttp";
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';




function ActualizarPasswordUsuario() {

    const [passwordAntigua, setPassword] = useState('');
    const [passwordNueva, setPasswordNueva] = useState('');
    const [confirmarPasswordNueva, setPasswordNuevaConfirmar] = useState('');
    const [existeCorreo, setExisteCorreo] = useState(false);
    const [correo, setCorreo] = useState('');


    const cambiarCorreo = (e) => {
        setCorreo(e.target.value)
    }

    const validarCorreoConBackend = async () => {
        const peticionesHttp = new PeticionesHttp();
        const res = await peticionesHttp.get(`/usuarios/email-existe/${correo}`);

        if (res.ok) {

            Swal.fire({
                title: '',
                text: res.data.message,
                icon: 'info'

            });
            setExisteCorreo(true);
            console.log("existe el correo");
        } else {
            console.log("no existe el correo");
            console.log({ res });

            Swal.fire({
                title: 'Error!',
                text: res.mensaje,
                icon: 'error'

            })
            setExisteCorreo(false);
        };

    };

    const cambiarPassword = (event) => {
        setPassword(event.target.value);
    };

    const cambiarPasswordNueva = (event) => {
        setPasswordNueva(event.target.value);
    };

    const cambiarPasswordNuevaConfirmar = (event) => {
        setPasswordNuevaConfirmar(event.target.value);
    };


    if (!existeCorreo) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <form
                    className="p-3 border rounded shadow-sm d-flex"
                    style={{ backgroundColor: '#ffffff', maxWidth: '400px', width: '100%' }}
                >
                    <input value={correo}
                        onChange={cambiarCorreo}
                        type="email"
                        className="form-control me-2"
                        placeholder="correo@ejemplo.com"
                        required
                    />
                    <input type='button' onClick={validarCorreoConBackend} className="btn btn-success" value="Validar" />
                </form>
            </div>
        );

    }

    const actulizarPassword = async () => {
        console.log("Actualizando contraseña");
        const objHttp = new PeticionesHttp();
        const res = await objHttp.put(`/usuarios/actualizar-password/${correo}`,
            {
                "passwordAntigua": passwordAntigua,
                "passwordNueva": passwordNueva,
                "confirmarPasswordNueva": confirmarPasswordNueva
            }
        );
        console.log("frontend", passwordNueva);


        if (!res.ok) {


            Swal.fire({
                title: 'Error!',
                text: res.mensaje,
                icon: 'error'

            })
        } else {
            Swal.fire({
                title: 'Contraseña actualizada con exito',
                text: res.mensaje,
                icon: 'info'

            })
        }
    };



    return (
        <div className="d-flex justify-content-center align-items-center " style={{ backgroundColor: '#fff' }}>
            <div className="card p-4 shadow-lg" style={{ width: '100%', maxWidth: '400px' }}>
                <h3 className="text-center text-primary mb-4">Actualizar Contraseña</h3>
                <form>
                    <div className="mb-3">
                        <label htmlFor="oldPassword" className="form-label">Contraseña Antigua</label>
                        <input type="password" value={passwordAntigua} onChange={cambiarPassword} className="form-control" id="oldPassword" placeholder="Ingresa tu contraseña actual" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="newPassword" className="form-label">Contraseña Nueva</label>
                        <input type="password" value={passwordNueva} onChange={cambiarPasswordNueva} className="form-control" id="newPassword" placeholder="Ingresa tu nueva contraseña" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña Nueva</label>
                        <input type="password" value={confirmarPasswordNueva} onChange={cambiarPasswordNuevaConfirmar} className="form-control" id="confirmPassword" placeholder="Confirma tu nueva contraseña" />
                    </div>
                    <div className="d-grid">
                        <input type='button' className="btn btn-primary" onClick={actulizarPassword} value="Actualizar" />
                    </div>
                </form>
            </div>
        </div>
    );

};

export default ActualizarPasswordUsuario;