import React from 'react';
import './index.css'
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from './components/context/appContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AppContextProvider>
    <App />
    </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
