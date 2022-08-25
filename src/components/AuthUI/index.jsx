import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Center, Container, Flex,
} from '@chakra-ui/react';

import LoginUI from './LoginUI';
import SignUpUI from './SignUpUI';
import './style.css';

function AuthUI(props) {
  const { renderPage } = props;
  const [page, setPage] = useState([renderPage]);

  const pushPage = ((newPage) => {
    setPage([newPage, ...page]);
  });

  useEffect(() => {
    if (page.length > 1) {
      setPage(page.slice(0, 1));
    }
  });

  return (
    <Flex className="auth-container">
      <Container className="artwork" maxW="100%">
        <Center h="100%">insert cool artwork here</Center>
      </Container>
      <Container className="credentials" p="50px" maxW="100%" centerContent>
        <h1 className="title-name">Honeyfilter</h1>
        <Container overflow="hidden">
          {
            page && page.map((pageName) => (
              pageName === 'login'
                ? <LoginUI key="login" pushPage={pushPage} />
                : pageName === 'signup' && <SignUpUI key="signup" pushPage={pushPage} />
            ))
          }
        </Container>
      </Container>
    </Flex>
  );
}
AuthUI.propTypes = {
  renderPage: PropTypes.string.isRequired,
};

export default AuthUI;
