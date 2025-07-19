import ProfilePage from './components/ProfilePage'
import React, { useContext } from 'react';

// Create a new Context for user data
export const UserContext = React.createContext(null);

function App() {
  // Define the user data
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  // ProfilePage component (now defined within App.jsx scope)
  function ProfilePage() {
    return (
      <div style={{ border: '1px solid #e2e8f0', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#4a5568', marginBottom: '0.75rem' }}>Profile Page</h2>
        <UserInfo />
      </div>
    );
  }

  // UserInfo component (now defined within App.jsx scope)
  function UserInfo() {
    return (
      <div style={{ backgroundColor: '#f9fafb', padding: '1rem', borderRadius: '0.5rem' }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '500', color: '#4a5568', marginBottom: '0.5rem' }}>User Information</h3>
        <UserDetails />
      </div>
    );
  }

  // UserDetails component (now defined within App.jsx scope)
  function UserDetails() {
    // Use the useContext hook to access the userData from the UserContext
    const userData = useContext(UserContext);

    // Render user details if userData is available
    if (!userData) {
      return <p style={{ color: '#ef4444' }}>User data not available.</p>;
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <p style={{ color: '#1a202c' }}><span style={{ fontWeight: '600' }}>Name:</span> {userData.name}</p>
        <p style={{ color: '#1a202c' }}><span style={{ fontWeight: '600' }}>Email:</span> {userData.email}</p>
      </div>
    );
  }

  return (
    // Provide the userData to all components wrapped within the UserContext.Provider
    <UserContext.Provider value={userData}>
      <div style={{ minHeight: '100vh', backgroundColor: '#f7fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', fontFamily: 'sans-serif' }}>
        <div style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '0.75rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', width: '100%', maxWidth: '28rem' }}>
          <h1 style={{ fontSize: '1.875rem', fontWeight: '700', textAlign: 'center', color: '#1a202c', marginBottom: '1.5rem' }}>User Profile</h1>
          <ProfilePage userData={userData} />
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
