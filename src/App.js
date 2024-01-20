import React, { useState } from 'react';
import Login from './Component/Login';
import Profile from './Component/Profile';

const App = () => {
  const [currentPage, setCurrentPage] = useState('login');
  const [user, setUser] = useState(null);

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const handleLogin = (userData) => {
    setUser(userData);
    navigateTo('profile');
  };

  return (
    <div>
      {currentPage === 'login' && <Login onLogin={handleLogin} />}
      {currentPage === 'profile' && <Profile user={user} />}
    </div>
  );
};

export default App;
