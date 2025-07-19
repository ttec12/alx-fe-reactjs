function Services() {
    const pageStyle = {
      padding: '20px',
      backgroundColor: '#dbe4f0',
      minHeight: 'calc(100vh - 120px)',
      textAlign: 'center',
    };
  
    const headingStyle = {
      color: '#1a5276',
      fontSize: '2.5em',
      marginBottom: '30px',
    };
  
    const listStyle = {
      listStyleType: 'none',
      padding: 0,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '20px',
      maxWidth: '900px',
      margin: '0 auto',
    };
  
    const listItemStyle = {
      backgroundColor: 'white',
      padding: '25px',
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
      textAlign: 'left',
      fontSize: '1.1em',
      color: '#34495e',
      fontWeight: 'bold',
    };
  
    return (
      <div style={pageStyle}>
        <h1 style={headingStyle}>Our Services</h1>
        <ul style={listStyle}>
          <li style={listItemStyle}>Technology Consulting: Providing expert advice and solutions for your IT infrastructure and digital transformation needs.</li>
          <li style={listItemStyle}>Market Analysis: In-depth research and insights to help you understand market trends and competitive landscapes.</li>
          <li style={listItemStyle}>Product Development: From concept to launch, we assist in creating innovative products that meet market demands.</li>
          <li style={listItemStyle}>Digital Marketing: Strategies to enhance your online presence, including SEO, social media, and content marketing.</li>
          <li style={listItemStyle}>Business Strategy: Developing comprehensive plans to achieve your organizational goals and sustainable growth.</li>
        </ul>
      </div>
    );
  }
  
  export default Services;