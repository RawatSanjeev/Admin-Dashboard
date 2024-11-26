import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Here you would normally authenticate with an API
        if (username === 'admin' && password === 'password') {
            onLogin(username); // Call the onLogin prop
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Login</button>
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </form>
    );
};

// Adding PropTypes validation for the 'onLogin' prop
Login.propTypes = {
    onLogin: PropTypes.func.isRequired,  // Validate that onLogin is a required function
};

export default Login;

