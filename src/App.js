import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegistrationComponent from './components/RegistrationComponent';
import LoginComponent from './components/LoginComponent';
import LogoutComponent from './components/LogoutComponent';
import './styles.css'; // Import your custom styles

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">Your App</Link>
            <ul className="navbar-nav ms-auto d-flex align-items-center">
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/logout">Logout</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/register" element={<RegistrationComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/logout" element={<LogoutComponent />} />
        </Routes>

        <footer className="footer">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Your App. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
