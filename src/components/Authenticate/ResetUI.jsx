import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button, Input, Flex,
} from '@chakra-ui/react';

function ResetUI(props) {
  const { pushPage } = props;
  const [exit, setExit] = useState();
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
  };

  const gotoLogin = async (e) => {
    e.preventDefault();
    setExit('login');
  };

  useEffect(() => {
    if (exit) {
      setTimeout(() => {
        pushPage(exit);
        navigate(`/${exit}`);
      }, 690);
    }
  }, [exit]);

  return (
    <Flex className={exit ? 'slide-out' : 'slide-in'}>
      <form className="credentials-form" autoComplete="off" onSubmit={handleReset}>
        <Input id="email" type="email" placeholder="Email" />
        <Button className="btn-primary" width="100%" type="submit">Reset Password</Button>
      </form>
      <button className="btn-text" type="button" onClick={gotoLogin}>Go back</button>
    </Flex>
  );
}
ResetUI.propTypes = {
  pushPage: PropTypes.func.isRequired,
};

export default ResetUI;
