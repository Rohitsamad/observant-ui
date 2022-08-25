import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button, Input, Flex, Alert, AlertIcon, CloseButton, IconButton,
} from '@chakra-ui/react';

import ReturnIcon from '../../assets/ReturnIcon';
import UserService from '../../services/UserService';

function ResetUI(props) {
  const { pushPage } = props;
  const [exit, setExit] = useState();
  const [reset, setReset] = useState(false);
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const result = await UserService.reset(email);
    if (result) setReset(true);
  };

  const gotoLogin = async (e) => {
    e.preventDefault();
    setExit('login');
  };

  const onClose = async (e) => {
    e.preventDefault();
    setReset(false);
  };

  useEffect(() => {
    if (exit) {
      setTimeout(() => {
        pushPage(exit);
        navigate(`/${exit}`);
      }, 420);
    }
  }, [exit]);

  return (
    <Flex className={exit ? 'swipe-out' : 'swipe-in'}>
      <IconButton
        alignSelf="flex-start"
        position="relative"
        size="sm"
        variant="ghost"
        mb="20px"
        icon={<ReturnIcon />}
        onClick={gotoLogin}
      />
      {
        reset
          ? (
            <Alert status="success" mb="20px">
              <AlertIcon />
              The link to reset the password has been sent your email.
              <CloseButton
                alignSelf="flex-start"
                position="relative"
                right={-1}
                top={-1}
                onClick={onClose}
              />
            </Alert>
          )
          : (
            <form className="credentials-form" autoComplete="off" onSubmit={handleReset}>
              <Input id="email" type="email" placeholder="Email" />
              <Button className="btn-primary" width="100%" type="submit">Reset Password</Button>
            </form>
          )
      }

    </Flex>
  );
}
ResetUI.propTypes = {
  pushPage: PropTypes.func.isRequired,
};

export default ResetUI;
