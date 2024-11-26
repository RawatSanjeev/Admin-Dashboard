// src/components/UserForm.jsimport React, { useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { addUser, editUser } from '../api/api';

const UserForm = ({ user, onUserUpdated }) => {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (user) {
            setName(user.name);
            setRole(user.role);
        } else {
            setName('');
            setRole('');
        }
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            if (user) {
                await editUser(user.id, { name, role });
            } else {
                await addUser({ id: Date.now(), name, role });
            }
            onUserUpdated();
            setName('');
            setRole('');
        } catch (err) {
            setError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const getButtonText = () => {
        if (loading) return 'Submitting...';
        if (user) return 'Update';
        return 'Add';
    };

    return (
        <form onSubmit={handleSubmit} className="user-form">
            <div className="form-group">
                <label htmlFor="user-name">Name</label>
                <input
                    id="user-name"
                    type="text"
                    placeholder="Enter user's name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="user-role">Role</label>
                <input
                    id="user-role"
                    type="text"
                    placeholder="Enter user's role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                />
            </div>

            <button type="submit" disabled={loading}>
                {getButtonText()}
            </button>

            {error && <p className="error-message">{error}</p>}
        </form>
    );
};

UserForm.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
    }),
    onUserUpdated: PropTypes.func.isRequired,
};

export default UserForm;




