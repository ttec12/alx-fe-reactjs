function Home() {
    const pageStyle = {
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#f4f4f4',
      minHeight: 'calc(100vh - 120px)', // Adjust based on navbar/footer height
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    };
  
    const headingStyle = {
      color: '#2c3e50',
      fontSize: '3em',
      marginBottom: '20px',
    };
  
    const paragraphStyle = {
      color: '#34495e',
      fontSize: '1.2em',
      maxWidth: '600px',
      lineHeight: '1.6',
    };
  
    return (
      <div style={pageStyle}>
        <h1 style={headingStyle}>Welcome to Our Company</h1>
        <p style={paragraphStyle}>We are dedicated to delivering excellence in all our services, striving to exceed expectations and foster lasting relationships with our clients.</p>
        <img src="https://via.placeholder.com/600x300?text=Company+Overview" alt="Company Overview" style={{ marginTop: '30px', maxWidth: '90%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
      </div>
    );
  }
  
  export default Home;