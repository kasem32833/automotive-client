import { Result } from 'postcss';
import auth from '../firebase/firebase.config'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Children, createContext } from 'react';


const googleAuthProvider = new GoogleAuthProvider();
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const signIn = (email, password)=>{


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
        signInWithGoogle,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;