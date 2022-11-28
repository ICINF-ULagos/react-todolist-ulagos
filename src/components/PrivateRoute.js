import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const token = sessionStorage.getItem('token');

    if (!token) {
        // user is not authenticated
        return <Navigate to="/login" />;
    }
    return children;
}


export default PrivateRoute;