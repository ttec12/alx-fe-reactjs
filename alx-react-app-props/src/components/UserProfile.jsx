import React, { useContext, createContext } from 'react';

// 1. Create a UserContext
const UserContext = createContext();

// UserProfile Component: Displays user information consumed from context.
const UserProfile = () => {
  // 2. Consume the context using useContext
  const user = useContext(UserContext);

  // Ensure user data is available before rendering
  if (!user) {
    return null; // Or render a loading state/placeholder
  }

  return (
    // Applying inline CSS for styling
    <div style={{
      border: '1px solid #d1d5db', // border-gray-300
      borderRadius: '0.5rem', // rounded-lg
      padding: '1rem', // p-4
      margin: '1rem', // m-4
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // shadow-md
      backgroundColor: '#ffffff' // bg-white
    }}>
      {/* User's Name with updated style */}
      <h2 style={{
        fontSize: '1.5rem', // text-2xl
        fontWeight: '600', // font-semibold
        color: '#2563eb', // text-blue-600
        marginBottom: '0.5rem' // mb-2
      }}>
        {user.name}
      </h2>
      {/* User's Age with updated style for the value */}
      <p style={{
        color: '#374151', // text-gray-700
        fontSize: '1.125rem' // text-lg
      }}>
        Age: <span style={{ fontWeight: 'bold' }}>{user.age}</span>
      </p>
      {/* User's Bio with updated style */}
      <p style={{
        color: '#4b5563', // text-gray-600
        marginTop: '0.5rem' // mt-2
      }}>Bio: {user.bio}</p>
    </div>
  );
};

// App Component: The main application component that uses UserProfile.
const App = () => {
  // Define user data
  const users = [
    {
      name: "Alice Wonderland",
      age: "25",
      bio: "Loves hiking, photography, and exploring new places. Always seeking adventure!"
    },
    {
      name: "Bob The Builder",
      age: "30",
      bio: "Passionate about coding, building web applications, and contributing to open source projects."
    },
    {
      name: "Charlie Chaplin",
      age: "28",
      bio: "A creative writer and avid reader, enjoys quiet evenings with a good book and a cup of tea."
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #eff6ff, #e0e7ff)', // from-blue-100 to-indigo-200
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      fontFamily: 'Inter, sans-serif' // font-inter
    }}>
      {/* Removed Tailwind CSS script tag */}
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
        {/* Iterate over users and provide each user's data via UserContext.Provider */}
        {users.map((user, index) => (
          <UserContext.Provider key={index} value={user}>
            <UserProfile />
          </UserContext.Provider>
        ))}
      </div>
    </div>
  );
};

export default App;
