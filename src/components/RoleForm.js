import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { addRole, editRole } from '../api/api';

const RoleForm = ({ role, onRoleUpdated }) => {
    const [name, setName] = useState('');
    const [error, setError] = useState(null); // State for handling errors
    const [isLoading, setIsLoading] = useState(false); // State for loading indicator

    useEffect(() => {
        if (role) {
            setName(role.name);
        } else {
            setName('');
        }
    }, [role]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Start loading
        setError(null); // Clear previous errors

        try {
            if (role) {
                await editRole(role.id, { name });
            } else {
                await addRole({ id: Date.now(), name }); // Consider using a more robust ID system like UUID
            }
            onRoleUpdated();
            setName('');
        } catch (error) {
            setError('An error occurred while saving the role. Please try again.');
        } finally {
            setIsLoading(false); // End loading
        }
    };

    const buttonText = isLoading 
        ? 'Saving...' 
        : role 
        ? 'Update' 
        : 'Add';

    const headingText = role ? 'Edit Role' : 'Add New Role'; // Extracted ternary operation

    return (
        <form onSubmit={handleSubmit}>
            <h2>{headingText}</h2>
            <div>
                <label htmlFor="role-name">Role Name</label>
                <input 
                    id="role-name"
                    type="text" 
                    placeholder="Role Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />
            </div>
            {error && <div style={{ color: 'red' }}>{error}</div>} {/* Display error message */}
            <button type="submit" disabled={isLoading}>
                {buttonText} Role
            </button>
        </form>
    );
};

// Add PropTypes validation
RoleForm.propTypes = {
    role: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
    }),
    onRoleUpdated: PropTypes.func.isRequired,
};

export default RoleForm;



