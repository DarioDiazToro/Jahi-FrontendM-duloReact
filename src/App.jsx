import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Login from "./components/Login";
import TrainingLog from './components/TrainingLog';
import ProgressReport from './components/ProgressReport';
import PersonalizedPlans from './components/PersonalizedPlans';
import UserProfile from './components/UseProfile';
import NutritionLog from './components/NutritionLog';
import Achievements from './components/Achievements';
import NavBar from './components/NavBar';
import Recommendations from './components/registerUser';
import RegisterUser from './components/registerUser';
import ActualizarPasswordUsuario from './components/ActualizarPassword';
import LoginV2 from './components/LoginV2';

const AppContent = () => {
  const location = useLocation();

  // Rutas donde el NavBar debe ocultarse
  const routesWithoutNavBar = ['/loginv2', '/actualizar-password'];
  const hideNavBar = routesWithoutNavBar.includes(location.pathname);

  return (
    <>
      {!hideNavBar && <NavBar />}
      <div >
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/loginv2" element={<LoginV2 />} />
          <Route path="/training-log" element={<TrainingLog />} />
          <Route path="/progress-report" element={<ProgressReport />} />
          <Route path="/personalized-plans" element={<PersonalizedPlans />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/nutrition-log" element={<NutritionLog />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/recomendations" element={<Recommendations />} />
          <Route path="/registerUser" element={<RegisterUser />} />
          <Route path="/actualizar-password" element={<ActualizarPasswordUsuario />} />
        </Routes>
      </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
