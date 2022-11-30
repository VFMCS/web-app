import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CssBaseline } from '@mui/material';

export const Lemon = require('./images/vegetable-images/lemons.jpeg');
export const Apple = require('./images/vegetable-images/apple.jpeg');
export const Pear = require('./images/vegetable-images/pear.png');
export const Orange = require('./images/vegetable-images/oranges.jpeg');
export const Grapefruit = require('./images/vegetable-images/grapefruit.jpeg');
export const Lime = require('./images/vegetable-images/lime.jpeg');
export const Peaches = require('./images/vegetable-images/peaches.jpeg');
export const Tomato = require('./images/vegetable-images/tomatoes.jpeg');
export const Blueberry = require('./images/vegetable-images/blueberry.jpeg');
export const Cherry = require('./images/vegetable-images/cherries.jpeg');
export const Onion = require('./images/vegetable-images/onions.jpeg');
export const Garlic = require('./images/vegetable-images/garlic.jpeg');
export const Potato = require('./images/vegetable-images/potatoes.jpeg');
export const Asparagus = require('./images/vegetable-images/asparagus.jpeg');
export const Celery = require('./images/vegetable-images/celery.jpeg');
export const Broccoli = require('./images/vegetable-images/broccoli.jpeg');
export const Cabbage = require('./images/vegetable-images/cabbage.jpeg');
export const Cauliflower = require('./images/vegetable-images/cauliflower.jpeg');


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();