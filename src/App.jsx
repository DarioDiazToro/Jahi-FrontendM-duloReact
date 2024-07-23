
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import TrainingLog from './components/TrainingLog';
import ProgressReport from './components/ProgressReport';
import PersonalizedPlans from './components/PersonalizedPlans';
import UserProfile from './components/UseProfile';
import NutritionLog from './components/NutritionLog';
import Achievements from './components/Achievements';
import NavBar from './components/NavBar';
import Recommendations from './components/Recomendations';

const App = () => {
  return (
    <Router>
      <NavBar></NavBar>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/training-log" element={< TrainingLog />} />
          <Route path="/progress-report" element={< ProgressReport />} />
          <Route path="/personalized-plans" element={< PersonalizedPlans />} />
          <Route path="/user-profile" element={< UserProfile />} />
          <Route path="/nutrition-log" element={< NutritionLog />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/recomendations" element={<Achievements />} />

        </Routes>
      </div>
    </Router>
  )
};

export default App;