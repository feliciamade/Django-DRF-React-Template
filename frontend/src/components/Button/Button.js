import React from 'react';

function Button(props) {

  const { label } = props;
  const buttonStyle = {
  backgroundColor: 'rgb(229, 255, 100)',
  padding: '10px 25px',
  borderRadius: '5px',
  border: 'none',
  color: 'rgb(25, 48, 66)',
  fontFamily: 'poppins, sans-serif', 
  fontSize: '20px',
  fontWeight: '100',
  textTransform: 'uppercase',
  }
  ;
  return (
    <button style={buttonStyle}>{label}</button>
  );
}

export default Button;