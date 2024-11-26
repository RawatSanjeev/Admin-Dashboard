import React from 'react';



const Home = () => {
    return (
        <div>
            <h2>Welcome to the Admin Dashboard</h2>
            <p>Welcome to the Admin Dashboard—your central hub for managing users, roles, and organizational settings. Designed with businesses in mind, this platform ensures streamlined operations by providing tools to oversee user accounts, configure role-based access, and maintain a secure, efficient system. Empower your team to focus on what matters most while we handle the administrative details.</p>
            
            <section>
                <h3>Dashboard Overview</h3>
                <p>
                    This Admin Dashboard provides tools to:
                </p>
                <ul>
                    <li>View and manage user accounts.</li>
                    <li>Define and update role permissions.</li>
                    <li>Monitor system activities and logs (coming soon).</li>
                </ul>
            </section>

            <section>
                <h3>Quick Links</h3>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', flex: 1 }}>
                        <h4>User Management</h4>
                        <p>View, add, or edit user details.</p>
                        <a href="/users">Go to User Management</a>
                    </div>
                    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', flex: 1 }}>
                        <h4>Role Management</h4>
                        <p>Define and assign roles to users.</p>
                        <a href="/roles">Go to Role Management</a>
                    </div>
                </div>
            </section>

            <section>
                <h3>System Statistics (Coming Soon)</h3>
                <p>
                    Stay updated with real-time statistics and key performance indicators, such as:
                </p>
                <ul>
                    <li>Total number of users.</li>
                    <li>Active roles and permissions.</li>
                    <li>System health status.</li>
                </ul>
                <p style={{ color: 'gray', fontStyle: 'italic' }}>This feature is under development. Stay tuned!</p>
            </section>

            <section>
                <h3>Announcements</h3>
                <p>
                    <strong>Upcoming Maintenance:</strong> The dashboard will undergo maintenance on <em>Saturday, Dec 2, 2024</em>, from <strong>12:00 AM to 4:00 AM</strong>. Please plan accordingly.
                </p>
            </section>
        </div>
    );
};

export default Home;
