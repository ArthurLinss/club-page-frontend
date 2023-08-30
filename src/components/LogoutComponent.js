import React, { useEffect } from 'react';

const LogoutComponent = () => {
  const serverUrl = process.env.REACT_APP_SERVER_URL;

  const handleLogout = async () => {
    const response = await fetch(`${serverUrl}/api/logout/`, {
      method: 'POST',
      credentials: 'include',
    });
    // Handle response
  };

  useEffect(() => {
    handleLogout();
  }, []);

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Logout</h2>
          <p>Logging out...</p>
        </div>
      </div>
    </div>
  );
};

export default LogoutComponent;
