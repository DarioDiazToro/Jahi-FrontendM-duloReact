import React, { useState } from 'react';

const NutritionLog = () => {
    const [meal, setMeal] = useState({
        food: '',
        calories: '',
        macros: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMeal({ ...meal, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica para enviar los datos al backend
        console.log(meal);
    };

    return (
        <div>
            <h2>Registro de Nutrición</h2>
            <form onSubmit={handleSubmit}>
                <input name="food" placeholder="Alimento" onChange={handleChange} />
                <input name="calories" placeholder="Calorías" onChange={handleChange} />
                <input name="macros" placeholder="Macronutrientes" onChange={handleChange} />
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
};

export default NutritionLog;