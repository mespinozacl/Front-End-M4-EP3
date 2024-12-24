import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import ServiceList from './components/ServiceList';
import DoctorList from './components/DoctorList';
import AppointmentForm from './components/AppointmentForm';
import './App.css';
import UserProfile from './components/UserProfile';
import UserProvider from './components/UserContext';
import {DoctorContext} from './components/DoctorContext';


function App() {
  const [doctors, setDoctors] = useState([]);

  return (
    <UserProvider>
      <DoctorContext.Provider
        value={{
          doctors,
          setDoctors}}>
      <Router>
        <div className="app-container">
          <nav>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/equipo-medico">Equipo Médico</Link></li>
              <li><Link to="/citas">Citas</Link></li>
              <li><Link to="/mi-cuenta">Mi Cuenta</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<ServiceList />} />
            <Route path="/equipo-medico" element={<DoctorList />} />
            <Route path="/citas" element={<AppointmentForm />} />
            <Route path="/mi-cuenta" element={<UserProfile />} />
          </Routes>
        </div>
      </Router>
      </DoctorContext.Provider>
    </UserProvider>
  );
}

export default App;