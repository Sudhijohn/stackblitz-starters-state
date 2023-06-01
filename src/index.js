import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ColorContextProvider from './ColorContext';
import { Provider } from 'react-redux';
import store from './store';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <ColorContextProvider>
        <App />
      </ColorContextProvider>
    </Provider>
  </StrictMode>
);
