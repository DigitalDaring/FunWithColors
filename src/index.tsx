import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { hydrate, render } from "react-dom";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'color-square': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'fun-layout': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'colors-array': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'color-slider': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'color-square-container': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'tiny-swatch': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'slider-array': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const rootElement = document.getElementById('root');
if (rootElement?.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
