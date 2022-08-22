import { useNavigate } from 'react-router-dom';

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
      <br />
      <button type="button" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
