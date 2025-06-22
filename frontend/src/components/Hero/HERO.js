import React from 'react';
import Button from '../Button/Button'; 

function HERO(props) {
  const { color, textColor } = props;
  const heroContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '100px',
    backgroundColor: color || '#88a2ff',
    width: '1200px',
    height: '400px',
    margin: '40px 40px 25px 40px',
    borderRadius: '10px',
    gap: '20px',
    boxSizing: 'border-box'
  };

  const headlineStyle = {
    fontSize: '60px',
    fontWeight: '400',
    width: '800px',
    textAlign: 'center',
    color: color || 'white',
    textTransform: 'uppercase',
  };

  const paragraphStyle = {
    maxWidth: '700px',
    margin: '0 auto',
    
    color: textColor || 'white', 
    fontSize: '20px',
    lineHeight: '30px',
    textAlign: 'center',
  };

  return (
    <div style={heroContainerStyle}>
      <h1 style={headlineStyle}>Headline</h1>
      <p style={paragraphStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenean sed commodo nisi. Pellentesque ligula eros, bibendum
        feugiat tristique bibendum, imperdiet quis risus.</p>
        <Button label="Learn More" />
    </div>
  );
}

export default HERO;