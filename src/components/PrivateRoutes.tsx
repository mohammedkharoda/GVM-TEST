import { useContext } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { AuthContext } from './Auth';

const PrivateRoute = ({ path, ...props }: { path: string }) => {
    const auth = useContext(AuthContext);
    const loggedIn = auth && 'loggedIn' in auth ? auth.loggedIn : false;

    return loggedIn ? <Route {...props} path={path} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
