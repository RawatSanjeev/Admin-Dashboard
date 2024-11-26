import React, { useEffect, useState } from 'react';
import { fetchRoles, deleteRole, editRole } from '../api/api';  // Import API functions
import RoleForm from './RoleForm';  // Import Role Form for adding/editing roles
import PermissionManager from './PermissionManager';  // Import Permission Manager for role-based permissions management


const RoleList = () => {
    // State hooks for roles and the currently edited role
    const [roles, setRoles] = useState([]);
    const [editingRole, setEditingRole] = useState(null);

    // Effect hook to load roles when the component mounts
    useEffect(() => {
        loadRoles();
    }, []);

    // Load roles from the API (or local storage)
    const loadRoles = async () => {
        const data = await fetchRoles();
        setRoles(data);
    };

    // Delete a role by ID and reload the roles list
    const handleDelete = async (id) => {
        await deleteRole(id);
        loadRoles();
    };

    // Update role permissions after they are modified
    const handlePermissionsUpdated = async (updatedPermissions) => {
        if (editingRole) {
            await editRole(editingRole.id, { ...editingRole, permissions: updatedPermissions });
            loadRoles();
            setEditingRole(null);  // Clear the editing state after updating
        }
    };

    return (
        <div className="role-list-container">
            <h2>Role Management</h2>

            {/* Role Form Component - for adding and editing roles */}
            <RoleForm role={editingRole} onRoleUpdated={loadRoles} />

            {/* Permission Manager Component - for managing permissions of the current role */}
            {editingRole && (
                <PermissionManager
                    role={editingRole}
                    onPermissionsUpdated={handlePermissionsUpdated}
                />
            )}

            {/* Role List: Display all roles */}
            <ul className="role-list">
                {roles.map((role) => (
                    <li key={role.id} className="role-item">
                        <div className="role-details">
                            <span className="role-name">{role.name}</span>
                        </div>
                        <div className="role-actions">
                            <button onClick={() => setEditingRole(role)}>Edit</button>
                            <button onClick={() => handleDelete(role.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RoleList;


