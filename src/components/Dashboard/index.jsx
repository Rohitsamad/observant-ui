import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

import UserService from '../../services/UserService';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    await UserService.logout();
    navigate('/');
  };

  const { email } = UserService.getUser();

  return (
    <div>
      <p>
        Welcome
        {' '}
        {email}
      </p>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}

export default Dashboard;
