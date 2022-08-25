import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Landing from './components/Landing';
import Authenticate from './components/Authenticate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="login" element={<Authenticate renderPage="login" />} />
        <Route path="signup" element={<Authenticate renderPage="signup" />} />
        <Route path="reset" element={<Authenticate renderPage="reset" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
