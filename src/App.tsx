import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import LoginForm from './components/Login';
import RegisterForm from './components/Register';
import Home from './components/Home';
import Details from './components/Details';
import { useState } from 'react';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/home" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/login" element={<LoginForm setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<RegisterForm setIsLoggedIn={setIsLoggedIn} />} />
        <Route
          path="/home"
          element={
            isLoggedIn ? (
              <Home />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default App;
