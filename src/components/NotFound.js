import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div>
        <h2>Page Not Found</h2>
        <Link to="/">Go Back to Dashboard</Link>
    </div>
);

export default NotFound;
