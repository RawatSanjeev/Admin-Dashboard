import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes

const PrivateRoute = ({ element, requiredRole, userRole, ...rest }) => {
    if (!userRole) {
        return <Navigate to="/login" />;
    }

    if (requiredRole && userRole !== requiredRole) {
        return <Navigate to="/" />;
    }

    return <Route {...rest} element={element} />;
};

// Adding PropTypes validation for the component props
PrivateRoute.propTypes = {
    element: PropTypes.element.isRequired,  // Validate that 'element' is a valid React element
    requiredRole: PropTypes.string,         // Validate that 'requiredRole' is a string
    userRole: PropTypes.string,             // Validate that 'userRole' is a string
};

export default PrivateRoute;

