import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ContextProvider } from "./context/Context";
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ContextProvider> */}
      <App />
    {/* </ContextProvider> */}
  </React.StrictMode>
);
