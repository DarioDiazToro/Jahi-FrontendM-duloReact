import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='container-nav' >
            <ul className='nav-bar'>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/user-profile">Pefil usuario</Link></li>
                <li><Link to="/progress-report">Reporte Progreso</Link></li>
                <li><Link to="/training-log">Registro entrenamiento</Link></li>
                <li><Link to="/achievements">Logros</Link></li>
                <li><Link to="/nutrition-log">Registro Nutricion</Link></li>
                <li><Link to="/personalized-plans">Planes personalizados</Link></li>
                <li><Link to="/recomendations">Recomendaciones Entrenamiento Personalizadas</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;