
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();


    if (loading) {
        return <progress className="progress w-56"></progress>
           
    }
    if (!user) { 
        
        return <Navigate to="/login" state={location.pathname}></Navigate>
    }


    return children;
    
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
    children: PropTypes.node,
    }
