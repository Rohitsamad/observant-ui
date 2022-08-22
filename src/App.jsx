import { useEffect, useState } from 'react';

import UserService from './services/UserService';

import './App.css';

function App() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    UserService.authStatus((user) => {
      setAuthUser(user);
      setLoading(false);
    });
  }, []);

  const handleLogout = async (e) => {
    e.preventDefault();
    await UserService.logout();
    setAuthUser(null);
  };

  if (loading) return <div>Loading..</div>;

  return (
    <div>
      {
        authUser
          ? (
            <div>
              <p>
                Welcome
                {' '}
                {authUser.email}
              </p>
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
