import { use } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";

const PrivateRoutes = ({ children }) => {
    const { user } = use(AuthContext);

    if (!user) {
        <Navigate to={"/signIn"}></Navigate>;
    }
    return children;
};

export default PrivateRoutes;
