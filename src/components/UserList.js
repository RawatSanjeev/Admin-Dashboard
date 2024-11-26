// src/components/UserList.js
import React, { useEffect, useState } from 'react';
import { fetchUsers, deleteUser  } from '../api/api';
import UserForm from './UserForm';


const UserList = () => {
    const [users, setUsers] = useState([]);
    const [editingUser , setEditingUser ] = useState(null);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const data = await fetchUsers();
        setUsers(data);
    };

    const handleDelete = async (id) => {
        await deleteUser (id);
        loadUsers();
    };

    return (
        <div>
            <h2>User Management</h2>
            <UserForm user={editingUser} onUserUpdated={loadUsers} />
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.role}
                        <div>
                            <button onClick={() => setEditingUser(user)}>Edit</button>
                            <button onClick={() => handleDelete(user.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
    
};

export default UserList;