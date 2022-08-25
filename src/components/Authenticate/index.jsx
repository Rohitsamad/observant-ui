import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Center, Container, Flex,
} from '@chakra-ui/react';

import LoginUI from './LoginUI';
import SignUpUI from './SignUpUI';
import ResetUI from './ResetUI';
import './style.css';

function Authenticate(props) {
  const { renderPage } = props;
  const [page, setPage] = useState([renderPage]);
  const [swipe, setSwipe] = useState(false);

  const pushPage = ((newPage) => {
    setPage([newPage, ...page]);
  });

  useEffect(() => {
    if (page.length > 1) {
      if (page[1] === 'reset') setSwipe(true);
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
        <Container overflow="hidden" h="100%" centerContent>
          {
            page && page.map((pageName) => (
              {
                login: <LoginUI key="login" pushPage={pushPage} swipe={swipe} />,
                signup: <SignUpUI key="signup" pushPage={pushPage} />,
                reset: <ResetUI key="reset" pushPage={pushPage} />,
              }[pageName]
            ))
          }
        </Container>
      </Container>
    </Flex>
  );
}
Authenticate.propTypes = {
  renderPage: PropTypes.string.isRequired,
};

export default Authenticate;
