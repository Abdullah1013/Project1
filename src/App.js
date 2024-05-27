import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from './screens/LoginPage'; 
import SignupPage from './screens/SignupPage';
import PrivateRoute from "./screens/PrivateRoute.js";
import Welcome from './screens/Welcome'
import './App.css';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>

        <Route path="/" element={<LoginPage />} />
        <Route
            path="/welcomePage"
            element={
              <PrivateRoute
                element={<Welcome/>}
                isAuthenticated={isAuthenticated}
              />
            }
          />
       
        </Routes>

        <Routes>

        <Route path="/register" element={<SignupPage />} />
        </Routes>
        </div>
        </BrowserRouter>
   
  );
}

export default App;
