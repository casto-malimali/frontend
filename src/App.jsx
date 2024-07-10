import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashbord';
import VoterRegistration from './components/Voting';
import Voting from './components/Voting';
import Home from './components/Home';
import ModalPop from './components/ModalPop';
import Signup from './components/Signup';


function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/homes" element={<AdminDashboard />} />
          <Route path="/register" element={<VoterRegistration />} />
          <Route path="/vote" element={<Voting />} />
          <Route path='/' element={<ModalPop />} />
          <Route path='/home' element={<Home />} />
          <Route path='/signus' element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
