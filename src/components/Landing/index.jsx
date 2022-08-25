import { useEffect, useState } from 'react';

import Dashboard from '../Dashboard';
import Loading from '../Loading';
import UserService from '../../services/UserService';

function Landing() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    UserService.authStatus((user) => {
      setAuthUser(user);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loading />;

  return (
    authUser ? <Dashboard /> : (
      <div>
        <a href="/login">Login</a>
        <br />
        <a href="/signup">Sign Up</a>
      </div>
    )
  );
}

export default Landing;
