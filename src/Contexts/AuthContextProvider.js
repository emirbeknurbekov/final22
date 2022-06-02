import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { notify } from "../components/Toastify/Toastify";
import { auth } from "../firebase";
import { ADMIN_EMAIL } from "../Helpers/const";

const authContext = createContext();
export const useAuth = () => useContext(authContext);

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    user: null,
    isAdmin: false,
    isLogged: false,
  });
  const navigate = useNavigate();

  const registerUser = async (email, password) => {
    try {
      let { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      let newUser = {
        user: user.email,
        isAdmin: user.email === ADMIN_EMAIL ? true : false,
        isLogged: true,
      };
      setCurrentUser(newUser);
      localStorage.setItem("currentUser", JSON.stringify(newUser));
      notify("success", "Registration completed successfully!");
      navigate("/");
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
      switch (error.code) {
        case "auth/invalid-email":
          notify("error", "Incorrect mail!");
          break;
        case "auth/email-already-in-use":
          notify("error", "The user with such mail already exists!");
          break;
        case "auth/weak-password":
          notify("error", "Password must be at least 6 characters long!");
          break;
        default:
          notify("error", "An error has occurred!");
      }
    }
  };

  const logOutUser = async () => {
    try {
      await signOut(auth);
      let noUser = {
        user: null,
        isAdmin: false,
        isLogged: false,
      };
      setCurrentUser(noUser);
      localStorage.setItem("currentUser", JSON.stringify(noUser));
      notify("warning", "The user is logged out!");
    } catch (err) {
      console.log(err);
    }
  };

  const loginUser = async (email, password) => {
    try {
      let { user } = await signInWithEmailAndPassword(auth, email, password);

      let newUser = {
        user: user.email,
        isAdmin: user.email === ADMIN_EMAIL ? true : false,
        isLogged: true,
      };
      setCurrentUser(newUser);
      localStorage.setItem("currentUser", JSON.stringify(newUser));
      notify("success", "Welcome!");
      navigate("/");
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
      switch (error.code) {
        case "auth/invalid-email":
          notify("error", "Incorrect mail!");
          break;
        case "auth/user-not-found":
          notify("error", "The user with such mail already exists!");
          break;
        case "auth/wrong-password":
          notify("error", "Incorrect password!");
          break;
        default:
          notify("error", "An error has occurred!");
      }
    }
  };

  const authListener = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser({
          user: user.email,
          isAdmin: user.email === ADMIN_EMAIL ? true : false,
          isLogged: true,
        });
      } else {
        console.log("no user from authListener");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  const resetPass = async (email) => {
    try {
      let { user } = await sendPasswordResetEmail(auth, email);
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
    }
  };
  return (
    <authContext.Provider
      value={{ currentUser, registerUser, logOutUser, loginUser, resetPass }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
