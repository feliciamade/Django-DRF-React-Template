import React from 'react';
import Label from '../Label/Label'; 

function Card(props) {

  const { color } = props;

  const cardStyles = {
    backgroundColor: color || '#c0e0ff',
    padding: '20px',
    borderRadius: '5px',
    color: 'white',
    width: '380px',
    height: '300px'
  };

  return (
    <div style={cardStyles}>
        <Label label="label" />
    </div>
  );
}

export default Card;