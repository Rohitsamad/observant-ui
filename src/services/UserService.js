import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  setPersistence,
  browserSessionPersistence,
  sendPasswordResetEmail,
} from 'firebase/auth';

import firebase from '../config/firebase';
import { createUser, fetchUser } from './ApiService';

const login = async (email, password, remember) => {
  try {
    if (!remember) {
      await setPersistence(firebase, browserSessionPersistence);
    }
    const { user } = await signInWithEmailAndPassword(firebase, email, password);
    const result = await fetchUser(user.accessToken, user.uid);
    return result;
  } catch (error) {
    return null;
  }
};

const signUp = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(firebase, email, password);
    const result = await createUser(user.accessToken);
    return result;
  } catch (error) {
    return null;
  }
};

const logout = async () => {
  await signOut(firebase);
};

const reset = async (email) => {
  try {
    await sendPasswordResetEmail(firebase, email);
    return true;
  } catch (error) {
    return null;
  }
};

const authStatus = async (cb) => {
  onAuthStateChanged(firebase, (user) => {
    cb(user);
  });
};

const getUser = () => firebase.currentUser;

export default {
  login,
  signUp,
  logout,
  reset,
  authStatus,
  getUser,
};
