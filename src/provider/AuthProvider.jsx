import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext(null);

// social auth providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();




const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);
   

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };


    //  update user profile
     const updateUserProfile = (displayName, email, photoURL) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName,
            photoURL,
            email
                      })
        }
           

    // signin user
    const logInUser =(email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // google login
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };
    // github login
    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    };
  

    const logOut = () => {
        setUser(null);
        return signOut(auth);
    }


    useEffect(() => {
        const unSubscribe =
            onAuthStateChanged(auth, currentUser => {
                const userEmail = currentUser?.email || user?.email;
                const loggedUser = { email: userEmail };
                console.log('user in auth state', currentUser);
                setUser(currentUser);
                setLoading(false);

                
                    // if (currentUser) {
                    //     axios.post('https://localhost:5000/jwt', loggedUser, 
                    //     { withCredentials: true })
                    //         .then(res => {
                    //             console.log('response', res.data);
                    //         })
                    // }
                    // else {
                    //     axios.post('https://localhost:5000/logout', loggedUser, {
                    //         withCredentials: true
                    //     }
                    // )
                    //         .then(res => {
                    //             console.log(res.data);
                    //         })
                    // }
                });
        return () => {
            unSubscribe();
        }
    }, [])
    // }, [reload])



    const authInfo = {
        user,
        setUser,
        loading,
        // setReload,
        createUser,
        logInUser,
        googleLogin,
        githubLogin,
        logOut,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node,
    }