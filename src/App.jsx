import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashbord';
import VoterRegistration from './components/Voting';
import Voting from './components/Voting';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/register" element={<VoterRegistration />} />
          <Route path="/vote" element={<Voting />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
