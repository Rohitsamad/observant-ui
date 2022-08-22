import { useState } from 'react';

import UserService from './services/UserService';

import './App.css';

function App() {
  const [authUser, setAuthUser] = useState(null);

  UserService.loginStatus((user) => {
    if (user) setAuthUser(user);
  });

  const handleLogout = async (e) => {
    e.preventDefault();
    await UserService.logout();
    setAuthUser(null);
  };

  return (
    <div>
      {
        authUser
          ? (
            <div>
              <p>Welcome to observant</p>
              <br />
              <button type="button" onClick={handleLogout}>Logout</button>
            </div>
          )
          : (
            <div>
              <a href="/login">Login</a>
              <br />
              <a href="/signup">Sign Up</a>
            </div>
          )
      }
    </div>
  );
}

export default App;
