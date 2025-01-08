import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../../../redux/store/store";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

    return isLoggedIn ? children : <Navigate to="/login" />;
};
