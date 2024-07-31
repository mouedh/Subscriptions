import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ModalProvider } from './ModalContext'; // Adjust the import path as necessary

ReactDOM.render(
  <ModalProvider>
    <App />
  </ModalProvider>,
  document.getElementById('root')
);
