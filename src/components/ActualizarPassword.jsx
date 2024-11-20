import { useState } from 'react'
import { PeticionesHttp } from "../helpers/peticionesHttp";
import Swal from 'sweetalert2'




function ActualizarPasswordUsuario(){

    const [passwordAntigua, setPassword] = useState('');
    const [passwordNueva, setPasswordNueva] = useState('');
    const [confirmarPasswordNueva, setPasswordNuevaConfirmar] = useState('');

    const email = 'ander@gmail.com';
    
    const cambiarPassword = (event) => {
        
        setPassword(event.target.value);
    };
    const cambiarPasswordNueva = (event) => {
        
        setPasswordNueva(event.target.value);
    };
    const cambiarPasswordNuevaConfirmar = (event) => {
        
        setPasswordNuevaConfirmar(event.target.value);
    };
    
    const actulizarPassword = async ()=>{
        console.log("Actualizando contraseña");
        const objHttp = new PeticionesHttp();
        const res = await objHttp.put(`/usuarios/actualizar-password/${email}`,
            {
             "passwordAntigua":passwordAntigua,
             "passwordNueva":passwordNueva,
             "confirmarPasswordNueva":confirmarPasswordNueva
            }
        );

        if (!res.ok) {
            Swal.fire({
                title: 'Error!',
                text: re.mensaje,
                icon: 'error'

            })
        }else{
            Swal.fire({
                title: 'Contraseña actualizada con exito',
                text: res.mensaje,
                icon: 'info'
    
                })
        }
    };


 
        return (
            <>
                <h1>Actualizar Contraseña</h1>
                <input placeholder='password antigua' type="password" name="password" id="password-antigua" value={passwordAntigua} onChange={cambiarPassword} />
                <input placeholder='password nueva' type="password" name="password" id="password-nueva" value={passwordNueva} onChange={cambiarPasswordNueva} />
                <input placeholder='confirmar password nueva' type="password" name="password" id="password-confirmar" value={confirmarPasswordNueva} onChange={cambiarPasswordNuevaConfirmar} />
    
    
                <button onClick={actulizarPassword}> Actualizar</button>
            </>
        )
        
    
};

export default ActualizarPasswordUsuario;