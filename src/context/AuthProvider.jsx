import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebase/firebase.init";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const signInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword (auth, email, password);
    }
    const userInfo = {
        loading,
        createUser,
        signInUser
    };
    return <AuthContext value={userInfo}>{children}</AuthContext>;
};
export default AuthProvider;
