import React, { useState } from 'react';

const TrainingLog = () => {
    const [session, setSession] = useState({
        type: '',
        duration: '',
        distance: '',
        calories: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSession({ ...session, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica para enviar los datos al backend
        console.log(session);
    };

    return (
        <div>
            <h2>Registro de Entrenamiento</h2>
            <form onSubmit={handleSubmit}>
                <input name="type" autoComplete='off' placeholder="Tipo de ejercicio" onChange={handleChange} />
                <input name="duration" autoComplete='off' placeholder="Duración" onChange={handleChange} />
                <input name="distance" autoComplete='off' placeholder="Distancia recorrida" onChange={handleChange} />
                <input name="calories" autoComplete='off' placeholder="Calorías quemadas" onChange={handleChange} />
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
};

export default TrainingLog;