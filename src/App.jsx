
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import TrainingLog from './components/TrainingLog';
import ProgressReport from './components/ProgressReport';
import PersonalizedPlans from './components/PersonalizedPlans';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/training-log" element={< TrainingLog />} />
          <Route path="/progress-report" element={< ProgressReport />} />
          <Route path="/personalized-plans" element={< PersonalizedPlans />} />

        </Routes>
      </div>
    </Router>
  )
};

export default App;