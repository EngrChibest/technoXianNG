import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../views/Home'
import About from '../views/About';
import HomeRobo from '../views/HomeRobotics';
import RoboClub from '../views/RoboClub';
import RoboCup from '../views/RobotCompetition';
import NXRLab from '../views/NXRLab';
import Corporate from '../views/Corporate';
import Enterpreneurship from '../views/Enterpreneurship';
import FAQs from '../views/FAQs';
import Contact from '../views/Contact';
import Register from '../views/RoboClubForm';
import Volunteer from '../views/VolunteerForm';
import NXRLabForm from '../views/NXRLabFom';

const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/home-roboclub" element={<HomeRobo />} />
        <Route path="/robotics-club" element={<RoboClub />} />
        <Route path="/robotics-competition" element={<RoboCup />} />
        <Route path="/nxr-lab" element={<NXRLab />} />
        <Route path="/corporate-club" element={<Corporate />} />
        <Route path="/enterpreneurship" element={<Enterpreneurship />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/nxr-lab-form" element={<NXRLabForm />} />
        <Route path="/volunteer" element={<Volunteer />} />
      </Routes>
    </Router>
  );
}

export default AppRoute;