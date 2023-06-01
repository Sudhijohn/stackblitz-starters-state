import React, { useState } from 'react';

const intialState = {
  color: '#FFF',
  changeColor: () => {},
};

export const ColorContext = React.createContext(intialState);

const ColorContextProvider = ({ children }) => {
  const colors = ['#000', '#EEF', '#C0B', '#FFF'];
  const [color, setColor] = useState('#FFF');
  const [count, setCount] = useState(0);

  const handleColorChange = () => {
    setColor(colors[count]);
    setCount((prevState) => {
      if (prevState === 3) return 0;
      return prevState + 1;
    });
  };

  return (
    <ColorContext.Provider value={{ color, onColorChange: handleColorChange }}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorContextProvider;
