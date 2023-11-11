import React from 'react';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { store } from '../src/app/store' 
import { createRoot } from "react-dom/client";

const rootContainer = document.getElementById("root");
createRoot(rootContainer).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />     
    </Provider>
  </React.StrictMode>
);