import { GithubAuthProvider, FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";
import axios from "axios";
// import { FacebookAuthProvider } from "firebase/auth/web-extension";
// import { FacebookAuthProvider } from "firebase/auth/cordova";


export const AuthContext = createContext(null);

// social auth provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const fbProvider = new FacebookAuthProvider();




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
    const logInUser = (email, password) => {
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
    // fb login
    const fbLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, fbProvider);
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
                // console.log('user in auth state', currentUser);
                setUser(currentUser);
                setLoading(false);



                if (currentUser) {

                    axios.post('https://server-11-nine.vercel.app/jwt', loggedUser, { withCredentials: true })
                        .then(response => {
                            console.log('token', response.data);
                        })


                }
                else {
                    axios.post('https://server-11-nine.vercel.app/logout', loggedUser, { withCredentials: true }
                    )
                        .then(response => {
                            console.log(response.data);
                        })
                }
            });
        return () => {
            unSubscribe();
        }
    }, [user?.email])




    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        logInUser,
        googleLogin,
        githubLogin,
        fbLogin,
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