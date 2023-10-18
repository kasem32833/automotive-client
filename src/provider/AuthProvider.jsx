

import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {  createContext } from 'react';
import { auth } from "../firebase/firebase.config";
import toast, { Toaster } from 'react-hot-toast';




const googleAuthProvider = new GoogleAuthProvider();
export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const register = (email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            if(result.currentUser){
                toast('User Registration successfully');
            }
        })
        .catch(error=>{
            toast(error.messge)
        
        })

    }

    const login = (email, password)=>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            toast('User login Successfully')
        })
        .catch(error=>{
            toast( error.messge)
        })

    }

    const signInWithGoogle = ()=>{
        signInWithPopup(auth, googleAuthProvider)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error.messge)
        })
    }

    const authInfo = {
        register,
        login,
        signInWithGoogle,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;