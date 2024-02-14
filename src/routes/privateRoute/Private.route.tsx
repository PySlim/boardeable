import {useAuthContext} from "../../core/contexts/authcontext/auth.use.tsx";
import { Navigate } from "react-router-dom";
import {ReactNode} from "react";
const PrivateRoute = ({children}:{ children: ReactNode }) => {
    const { isAuthenticated } = useAuthContext();
    return isAuthenticated ? children :<Navigate to="/" replace></Navigate>
};

export default PrivateRoute;