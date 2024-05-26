import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from './screens/LoginPage'; 
import SignupPage from './screens/SignupPage';
import Welcome from './screens/Welcome'
import './App.css';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>

        <Route path="/" element={<LoginPage />} />
        <Route path="/welcomePage" element={<Welcome />} />
        </Routes>

        <Routes>

        <Route path="/register" element={<SignupPage />} />
        </Routes>
        </div>
        </BrowserRouter>
   
  );
}

export default App;
