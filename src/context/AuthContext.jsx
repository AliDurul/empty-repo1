/* eslint-disable no-unused-vars */

import { useContext } from "react"
import { useState } from "react"
import { createContext } from "react"
import { GoogleAuthProvider,signInWithPopup,onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../auth/firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(true)
    const [loading, setLoading] = useState(true)
    let navigate = useNavigate();

const loginGoogle =  () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
  .then((result) => {
    navigate('/chat')
    // console.log(result.user);
    // setCurrentUser(result.user)
  
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}


const logout = () => {signOut(auth)}

useEffect(() => {
 onAuthStateChanged(auth,(user) => {
  if (user) {
    setCurrentUser(user);
    setLoading(false)
    navigate('/chat')
  } else {
    // User is signed out
    setCurrentUser(false);
    console.log("logged out");
  }
})


}, [])





const values = {
    currentUser,
    setCurrentUser,
    loginGoogle,
    logout,
    loading
}
  return (
    <AuthContext.Provider value={values} >{!loading && children}</AuthContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  return useContext(AuthContext)
}
