import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../FireBase/firebase.config";



export const  AuthContext = createContext(null)
const AuthProvider = ({children}) => {
     const googleProvider = new GoogleAuthProvider();
     const [user,setUser] = useState(null)
     const [loading,setLoading] = useState(true)
     


     //Register setup
     const register = (email,password) =>{
          setLoading(true)
         return createUserWithEmailAndPassword(auth,email,password)
     }
     //Google Account setup
     const signInWithGoogle = (value) => {
          setLoading(true)
         return signInWithPopup(auth, googleProvider)
     }

     useEffect(()=>{
          const unSubscribe = onAuthStateChanged(auth,currentUser=>{
               setUser(currentUser)
               setLoading(false)
          })
          return()=>{
          unSubscribe();
          }
     },[])

    // LogIn setup
     const logIn = (email,password) =>{
          setLoading(true)
         return signInWithEmailAndPassword(auth, email, password)
     }

     //Update User Profile
     const updateUser = (name,img) =>{
          setLoading(true)
         return updateProfile(auth.currentUser, {
          displayName:name, photoURL:img
        })
     }

      //LogOut
      const logOut =()=> { 
          setLoading(true)
         return signOut(auth)
          
     }


     const authInfo = {user,logIn,register,signInWithGoogle,logOut,loading,updateUser}
     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;