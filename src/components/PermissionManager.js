
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes


const permissionsList = ['Read', 'Write', 'Delete'];

const PermissionManager = ({ role, onPermissionsUpdated }) => {
    const [permissions, setPermissions] = useState(role?.permissions || []);

    useEffect(() => {
        if (role) {
            setPermissions(role.permissions || []);
        }
    }, [role]);

    const handlePermissionChange = (permission) => {
        setPermissions((prev) => {
            if (prev.includes(permission)) {
                return prev.filter((perm) => perm !== permission);
            } else {
                return [...prev, permission];
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onPermissionsUpdated(permissions);
    };

    return (
        <form onSubmit={handleSubmit} className="permission-form">
            <h3>Manage Permissions for {role ? role.name : 'New Role'}</h3>
            <div className="permissions-list">
                {permissionsList.map((permission) => (
                    <div key={permission} className="permission-item">
                        <label>
                            <input
                                type="checkbox"
                                checked={permissions.includes(permission)}
                                onChange={() => handlePermissionChange(permission)}
                                aria-label={`Permission to ${permission}`}
                            />
                            {permission}
                        </label>
                    </div>
                ))}
            </div>
            <button type="submit" className="submit-button">Save Permissions</button>
        </form>
    );
};

// Add PropTypes validation
PermissionManager.propTypes = {
    role: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        permissions: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
    onPermissionsUpdated: PropTypes.func.isRequired,
};

export default PermissionManager;