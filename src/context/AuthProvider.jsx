import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            console.log("user in the auth satate Change", currentUser);
        });
        return () => {
            unSubscribe();
        };
    }, []);

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };
    const userInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
    };
    return <AuthContext value={userInfo}>{children}</AuthContext>;
};
export default AuthProvider;
