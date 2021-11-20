import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

import {
  getAuth,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Swal from "sweetalert2";

initializeAuthentication();

const auth = getAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);

  //signInWithEmailAndPassword
  function signInWithEmail({ email, password, history, redirect }) {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Logged in!!",
          text: "Please Take A Look At Our Products!",
          showConfirmButton: false,
          timer: 2000,
        });
        setUser(result.user);
        history.replace(redirect);
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "An Error Occurred",
          text: `${err.message}`,
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .finally(() => setIsLoading(false));
  }

  // sign out
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Logged out.",
          text: "Hope to see you soon!",
          showConfirmButton: false,
          timer: 2000,
        });
        setUser({});
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "An Error Occurred",
          text: `${err.message}`,
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // get currently signed in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [user]);

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  // Register
  const signUpWithEmail = (newUserData, history) => {
    const { name, email, password } = newUserData;
    const role = "user";
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUserName(name);
        addUserToDB(name, email, role);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Registered",
          text: "Please take a look at our products!",
          showConfirmButton: false,
          timer: 2000,
        });
        setUser(result.user);
        history.push("/home");
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "An Error Occurred, please try again.",
          text: `${err.message}`,
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .finally(() => setIsLoading(false));
  };

  // Adding User To Database
  function addUserToDB(name, email, role) {
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name, email, role }),
    })
      .then((res) => res.json())
      .then((data) => {});
  }

  // update name and email
  function setUserName(name) {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {})
      .catch((error) => {});
  }

  return {
    setUserName,
    user,
    admin,
    setUser,
    error,
    auth,
    setError,
    logOut,
    signUpWithEmail,
    signInWithEmail,
    isLoading,
  };
};

export default useFirebase;
