import React, { useState } from 'react';

const RegistrationComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const serverUrl = process.env.REACT_APP_SERVER_URL;

  const handleRegistration = async () => {
    const registrationUrl = `${serverUrl}/api/register/`;
    console.log('Sending registration request to:', registrationUrl); // Print the URL to the terminal
       const response = await fetch(registrationUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    // Handle response
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Registration</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="button" className="btn btn-primary" onClick={handleRegistration}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationComponent;
