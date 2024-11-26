// src/api/api.js
import { v4 as uuidv4 } from 'uuid';

const USERS_STORAGE_KEY = 'users';
const ROLES_STORAGE_KEY = 'roles';

const getUsersFromStorage = () => {
    try {
        const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
        return storedUsers ? JSON.parse(storedUsers) : [];
    } catch (error) {
        console.error("Error retrieving users:", error);
        return [];
    }
};

const saveUsersToStorage = (users) => {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
};

const getRolesFromStorage = () => {
    try {
        const storedRoles = localStorage.getItem(ROLES_STORAGE_KEY);
        return storedRoles ? JSON.parse(storedRoles) : [];
    } catch (error) {
        console.error("Error retrieving roles:", error);
        return [];
    }
};

const saveRolesToStorage = (roles) => {
    localStorage.setItem(ROLES_STORAGE_KEY, JSON.stringify(roles));
};

export const fetchUsers = () => {
    return Promise.resolve(getUsersFromStorage());
};

export const fetchRoles = () => {
    return Promise.resolve(getRolesFromStorage());
};

export const addUser = (user) => {
    const users = getUsersFromStorage();
    user.id = uuidv4(); // Generate unique ID
    users.push(user);
    saveUsersToStorage(users);
    return Promise.resolve(user);
};

export const editUser = (id, updatedUser) => {
    const users = getUsersFromStorage();
    const updatedUsers = users.map((user) => (user.id === id ? { ...user, ...updatedUser } : user));
    saveUsersToStorage(updatedUsers);
    return Promise.resolve(updatedUser);
};

export const deleteUser = (id) => {
    const users = getUsersFromStorage();
    const updatedUsers = users.filter((user) => user.id !== id);
    saveUsersToStorage(updatedUsers);
    return Promise.resolve();
};

export const addRole = (role) => {
    const roles = getRolesFromStorage();
    role.id = uuidv4(); // Generate unique ID
    roles.push(role);
    saveRolesToStorage(roles);
    return Promise.resolve(role);
};

export const editRole = (id, updatedRole) => {
    const roles = getRolesFromStorage();
    const updatedRoles = roles.map((role) => (role.id === id ? { ...role, ...updatedRole } : role));
    saveRolesToStorage(updatedRoles);
    return Promise.resolve(updatedRole);
};

export const deleteRole = (id) => {
    const roles = getRolesFromStorage();
    const updatedRoles = roles.filter((role) => role.id !== id);
    saveRolesToStorage(updatedRoles);
    return Promise.resolve();
};

