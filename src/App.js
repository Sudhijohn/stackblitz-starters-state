import React, { useContext } from 'react';
import './style.css';
import { ColorContext } from './ColorContext';
import { useSelector, useDispatch } from 'react-redux';

export default function App() {
  const { color, onColorChange } = useContext(ColorContext);
  const colorRedux = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <div>
          <div className="square" style={{ backgroundColor: color }}></div>
          <br />
          <button onClick={onColorChange}>Change Color</button>
        </div>
        <br />
        <hr />
        <div>
          <div
            className="square"
            style={{ backgroundColor: colorRedux.color }}
          ></div>
          <br />
          <button
            onClick={() => {
              dispatch({
                type: 'CHANGE_COLOR',
                payload: Math.floor(Math.random() * 5),
              });
            }}
          >
            Change Color
          </button>
        </div>
      </div>
    </>
  );
}
