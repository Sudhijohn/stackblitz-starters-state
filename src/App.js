import React, { useContext } from 'react';
import './style.css';
import { ColorContext } from './state/ColorContext';
import { useSelector, useDispatch } from 'react-redux';
import Card from './components/card/Card';

export default function App() {
  const { color, onColorChange } = useContext(ColorContext);
  const colorRedux = useSelector((state) => state);
  const dispatch = useDispatch();

  const dispatchColorChange = () => {
    dispatch({
      type: 'CHANGE_COLOR',
      payload: Math.floor(Math.random() * 5),
    });
  };

  const card1Props = {
    color,
    btnProps: {
      handleClick: onColorChange,
      btnText: 'Color Change',
    },
  };
  const card2Props = {
    color: colorRedux.color,
    btnProps: {
      handleClick: dispatchColorChange,
      btnText: 'Color Change',
    },
  };

  return (
    <>
      <div className="container">
        <Card {...card1Props} />
        <br />
        <hr />
        <Card {...card2Props} />
      </div>
    </>
  );
}
