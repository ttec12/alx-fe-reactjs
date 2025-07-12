import React from 'react';

/**
 * Header component for the application.
 * Displays the main title of the page.
 */
const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 text-center rounded-b-lg shadow-lg">
      <h1 className="text-4xl font-extrabold tracking-tight">My Favorite Cities</h1>
    </header>
  );
};

export default Header;