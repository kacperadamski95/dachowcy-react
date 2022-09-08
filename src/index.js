import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/root.css';
import './styles/base.css';
import './styles/header.css';
import './styles/home.css';
import './styles/offer.css';
import './styles/realizations.css';
import './styles/contact.css';
import './styles/footer.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
