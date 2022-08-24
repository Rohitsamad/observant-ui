import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Landing from './components/Landing';
import AuthUI from './components/AuthUI';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="login" element={<AuthUI newAuth={false} />} />
        <Route path="signup" element={<AuthUI newAuth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
