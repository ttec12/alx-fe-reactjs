// MainContent.jsx
import React from 'react';

/**
 * A functional component that displays main content.
 * It contains a paragraph about favorite travel destinations.
 */
function MainContent() {
  return (
    <main style={{ 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif', 
      lineHeight: '1.6' 
    }}>
      <p style={{ 
        color: '#333', 
        fontSize: '16px', 
        textAlign: 'center' 
      }}>
        I love to visit New York, Paris, and Tokyo.
      </p>
    </main>
  );
}

export default MainContent;