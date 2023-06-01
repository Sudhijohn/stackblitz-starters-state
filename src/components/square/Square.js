import React from 'react';
import Styles from './Square.module.css';

const Square = ({ color }) => {
  return (
    <div
      className={Styles.square}
      style={{ backgroundColor: color ? color : '#FFF' }}
    ></div>
  );
};

export default Square;
