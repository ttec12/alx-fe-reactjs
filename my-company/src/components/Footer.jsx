function Footer() {
    const footerStyle = {
      padding: '20px',
      backgroundColor: '#333',
      color: 'white',
      textAlign: 'center',
      marginTop: 'auto', // Pushes the footer to the bottom
      width: '100%',
      boxSizing: 'border-box', // Include padding in width calculation
    };
  
    return (
      <footer style={footerStyle}>
        <p>&copy; 2025 My Company. All rights reserved.</p>
      </footer>
    );
  }
  
  export default Footer;