import { Navigate } from 'react-router-dom';
import { getToken } from '@/utils/token';
const AuthorRoute = ({ children }) => {
    return getToken() ? children : <Navigate to="/" replace />;
};

export default AuthorRoute;