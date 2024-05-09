
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();


    if (loading) {
        return <span className='text-center flex justify-center'><iframe src="https://giphy.com/embed/3oEjI6SIIHBdRxXI40" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/mashable-3oEjI6SIIHBdRxXI40"></a></p></span>

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
