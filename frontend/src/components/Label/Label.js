import React from 'react';

function Label(props) {

  const { label } = props;
  const labelStyle = {
  backgroundColor: 'hsl(0, 0.00%, 100.00%)',
  width:'100px',
  height:'30px',
  borderRadius: '30px',
  color: 'rgb(25, 48, 66)',
  fontFamily: 'poppins, sans-serif', 
  fontSize: '15px',
  fontWeight: '100',
  textTransform: 'lowercase',
  display:'flex',
  alignItems:'center',
  justifyContent:'left',
  padding:'10px 20px'
  }
  ;
  return (
    <div style={labelStyle}>{label}</div>
  );
}

export default Label;