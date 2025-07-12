import React from 'react';

// UserProfile Component: Displays user information passed via props.
const UserProfile = (props) => {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      borderRadius: '0.75rem',
      padding: '1.5rem',
      margin: '1rem auto',
      maxWidth: '24rem',
      transition: 'transform 0.3s ease-in-out',
      transform: 'scale(1)',
      textAlign: 'center'
    }}>
      {/* User's Name */}
      <h2 style={{
        fontSize: '2.25rem', // text-3xl
        fontWeight: '800', // font-extrabold
        color: '#1a202c', // text-gray-900
        marginBottom: '0.5rem', // mb-2
        textAlign: 'center'
      }}>
        {props.name}
      </h2>
      {/* User's Age */}
      <p style={{
        fontSize: '1.125rem', // text-lg
        color: '#4a5568', // text-gray-700
        marginBottom: '0.5rem', // mb-2
        textAlign: 'center'
      }}>
        <span style={{ fontWeight: '600' }}>Age:</span> {props.age}
      </p>
      {/* User's Bio */}
      <p style={{
        fontSize: '1rem', // text-md
        color: '#4a5568', // text-gray-600
        lineHeight: '1.625', // leading-relaxed
        textAlign: 'center'
      }}>
        <span style={{ fontWeight: '600' }}>Bio:</span> {props.bio}
      </p>
    </div>
  );
};

// App Component: The main application component that uses UserProfile.
const App = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #e0f2fe, #c3dafe)', // from-purple-100 to-blue-200
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      fontFamily: 'sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{
          fontSize: '3rem', // text-5xl
          fontWeight: '700', // font-bold
          color: '#2d3748', // text-gray-800
          marginBottom: '2.5rem', // mb-10
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' // drop-shadow-lg
        }}>
          Our Awesome Users
        </h1>
        {/* Example usage of UserProfile with different props */}
        <UserProfile
          name="Alice Wonderland"
          age="25"
          bio="Loves hiking, photography, and exploring new places. Always seeking adventure!"
        />
        <UserProfile
          name="Bob The Builder"
          age="30"
          bio="Passionate about coding, building web applications, and contributing to open source projects."
        />
        <UserProfile
          name="Charlie Chaplin"
          age="28"
          bio="A creative writer and avid reader, enjoys quiet evenings with a good book and a cup of tea."
        />
      </div>
    </div>
  );
};

export default App;
