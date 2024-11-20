import React, { useState } from 'react';

const UserProfile = () => {
    const [profile, setProfile] = useState({
        name: '',
        age: '',
        weight: '',
        height: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica para enviar los datos al backend
        console.log(profile);
    };

    return (
        <div>
            <h2>Gestión de Perfil de Usuario</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Nombre" autoComplete='off' onChange={handleChange} />
                <input name="age" placeholder="Edad" autoComplete='off' onChange={handleChange} />
                <input name="weight" placeholder="Peso" autoComplete='off' onChange={handleChange} />
                <input name="height" placeholder="Altura" autoComplete='off' onChange={handleChange} />
                <button type="submit">Actualizar Perfil</button>
            </form>
        </div>
    );
};

export default UserProfile;