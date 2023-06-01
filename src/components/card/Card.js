import React from 'react';
import Square from '../square/Square';
import Button from '../button/Button';

const Card = ({ color, btnProps }) => {
  return (
    <div>
      <Square color={color} />
      <br />
      <Button {...btnProps} />
    </div>
  );
};

export default Card;
