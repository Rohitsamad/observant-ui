import { initializeApp } from 'firebase/app';
import {
  getAuth,
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  setPersistence,
  browserSessionPersistence,
  sendPasswordResetEmail,
} from 'firebase/auth';

import firebaseConfig from '../config/firebase';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
connectAuthEmulator(auth, 'http://localhost:9099');

const login = async (email, password, remember) => {
  try {
    if (!remember) {
      await setPersistence(auth, browserSessionPersistence);
    }
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential;
  } catch (error) {
    return null;
  }
};

const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential;
  } catch (error) {
    return null;
  }
};

const logout = async () => {
  await signOut(auth);
};

const reset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return true;
  } catch (error) {
    return null;
  }
};

const authStatus = async (cb) => {
  onAuthStateChanged(auth, (user) => {
    cb(user);
  });
};

const getUser = () => auth.currentUser;

export default {
  login,
  signUp,
  logout,
  reset,
  authStatus,
  getUser,
};
