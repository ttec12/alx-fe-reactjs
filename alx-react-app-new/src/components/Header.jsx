import React from 'react';

/**
 * Header component for the application.
 * Displays the main title of the page.
 */
const Header = () => {
  return (
    <header style={{ backgroundColor: 'navy', color: 'white', padding: '1rem', textAlign: 'center', borderBottomLeftRadius: '0.5rem', borderBottomRightRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <h1 style={{ fontSize: '2.25rem', fontWeight: '800', letterSpacing: '-0.025em' }}>My Favorite Cities</h1>
    </header>
  );
};

export default Header;