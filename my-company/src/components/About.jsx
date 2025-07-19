function About() {
    const pageStyle = {
      padding: '20px',
      backgroundColor: '#ecf0f1',
      minHeight: 'calc(100vh - 120px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    };
  
    const headingStyle = {
      color: '#2980b9',
      fontSize: '2.5em',
      marginBottom: '20px',
    };
  
    const paragraphStyle = {
      color: '#2c3e50',
      fontSize: '1.1em',
      maxWidth: '800px',
      lineHeight: '1.8',
    };
  
    return (
      <div style={pageStyle}>
        <h1 style={headingStyle}>About Us</h1>
        <p style={paragraphStyle}>
          Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy.
          We pride ourselves on our innovative solutions, customer-centric approach, and a team of highly skilled professionals dedicated to achieving client success.
        </p>
        <p style={paragraphStyle}>
          Our mission is to empower businesses with cutting-edge strategies and robust solutions that drive growth and foster innovation. We believe in building strong partnerships based on trust and mutual success.
        </p>
        <img src="https://via.placeholder.com/500x250?text=Our+Team" alt="Our Team" style={{ marginTop: '30px', maxWidth: '90%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
      </div>
    );
  }
  
  export default About;