import React from 'react';

// UserProfile Component: Displays user information passed via props.
const UserProfile = (props) => {
  return (
    // Applying the new div styles as requested
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      {/* User's Name with updated style */}
      <h2 style={{ color: 'blue' }}>
        {props.name}
      </h2>
      {/* User's Age with updated style for the value */}
      <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      {/* User's Bio with updated style */}
      <p>Bio: {props.bio}</p>
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
