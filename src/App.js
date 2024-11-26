// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserList from './components/UserList';
import RoleList from './components/RoleList';
import NotFound from './components/NotFound';
import Home from './components/Home';
import ManageAccounts from './components/CompanyProfile';
import Footer from './components/Footer';
import './App.css'; // Import the CSS file

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <div className="content-container">
                    <h1>Admin Dashboard</h1>
                    <nav className="navbar"> {/* Apply the class to the navbar */}
                        <Link to="/">Home</Link>
                        <Link to="/manage-account/1">CompanyProfile</Link>
                        <Link to="/users">User Management</Link>
                        <Link to="/roles">Role Management</Link>
                    </nav>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/manage-account/:userId" element={<ManageAccounts />} />
                        <Route path="/users" element={<UserList />} />
                        <Route path="/roles" element={<RoleList />} />
                        <Route path="*" element={<NotFound />}/>
                        <Route path="/" element={<h2>Welcome to the Admin Dashboard</h2>} />
                    </Routes>
                
                </div>
                <Footer />
            </div>

        </Router>
    );
};

export default App;
