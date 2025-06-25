import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // create users
  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update user profile
  const updateUserProfile = (userObj) => {
    return updateProfile(auth.currentUser, userObj);
  };

  // loginUsers
  const loginUser = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google login
  const createGoogleUser = () => {
    return signInWithPopup(auth, provider);
  };

  // logout
  const logOutUser = () => {
    return signOut(auth);
  };

  // reset password email
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // observe user on state changed
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoading(false);
      setUsers(user);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = {
    users,
    isLoading,
    setUsers,
    createUser,
    updateUserProfile,
    loginUser,
    createGoogleUser,
    logOutUser,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
