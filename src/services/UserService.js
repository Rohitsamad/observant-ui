import { initializeApp } from 'firebase/app';
import {
  getAuth,
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAnGF5cDlkfH4AT2tXAYi9NOQ0qJSfGT1o',
  authDomain: 'observant-auth.firebaseapp.com',
  projectId: 'observant-auth',
  storageBucket: 'observant-auth.appspot.com',
  messagingSenderId: '492289285774',
  appId: '1:492289285774:web:d3bbf92377e0c86981f3df',
  measurementId: 'G-Y01PL42K98',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
connectAuthEmulator(auth, 'http://localhost:9099');

const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential;
  } catch (error) {
    return error;
  }
};

const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential;
  } catch (error) {
    return error;
  }
};

const logout = async () => {
  await signOut(auth);
};

const loginStatus = async (cb) => {
  onAuthStateChanged(auth, (user) => {
    cb(user);
  });
};

export default {
  login,
  signUp,
  logout,
  loginStatus,
};
