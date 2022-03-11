import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'color-square': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'fun-layout': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'colors-array': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
