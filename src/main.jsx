import ReactDOM from 'react-dom/client'; import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import App from './App';
import Login from './components/Login';
import SignUp from './components/SignUp';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  </BrowserRouter>,
);
