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

initializeAuthentication();

const auth = getAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  //signInWithEmailAndPassword
  const signInWithEmail = (e) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // //Adding user to DB
  // function addUserToDB(name, email) {
  //   fetch("http://localhost:5000/addUser", {
  //     method: "POST",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify({ name, email }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {});
  // }

  // sign out
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then((result) => {
        setUser({});
      })
      .catch((err) => {
        setError(err.message);
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

  // get name
  const getName = (e) => {
    setName(e?.target?.value);
  };
  // get email
  const getEmail = (e) => {
    setEmail(e?.target?.value);
  };

  // get password
  const getPassword = (e) => {
    if (/^(?=.*[A-Z]).{6}/.test(e.target.value)) {
      setPassword(e?.target?.value);
    } else {
      setError(
        "Password must have one upper case letter and be of 6 characters long"
      );
    }
  };

  // signUp
  const signUpWithEmail = () => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update name and email
  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    }).then((result) => {});
  };

  return {
    setUserName,
    user,
    setUser,
    error,
    auth,
    setError,
    logOut,
    getEmail,
    getPassword,
    signUpWithEmail,
    signInWithEmail,
    getName,
    name,
    email,
    isLoading,
  };
};

export default useFirebase;
