import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyles}>
            <div style={containerStyles}>
                <p>&copy; {new Date().getFullYear()} Admin Dashboard. All rights reserved.</p>
                <ul style={linkListStyles}>
                    <li style={linkItemStyles}><a href="/privacy" style={linkStyles}>Privacy Policy</a></li>
                    <li style={linkItemStyles}><a href="/terms" style={linkStyles}>Terms of Service</a></li>
                    <li style={linkItemStyles}><a href="/contact" style={linkStyles}>Contact Us</a></li>
                </ul>
            </div>
        </footer>
    );
};

// Inline styles for footer
const footerStyles = {
    backgroundColor: '#282c34',
    color: 'white',
    textAlign: 'center',
    padding: '2px 5px',
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    boxShadow: '0 -1px 3px rgba(0, 0, 0, 0.1)',
};

const containerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
};

const linkListStyles = {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'center',
    padding: 0,
    margin: '2px 0 0',
};

const linkItemStyles = {
    margin: '0 5px',
};

const linkStyles = {
    color: '#61dafb',
    textDecoration: 'none',
};

export default Footer;
