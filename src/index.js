import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal, ThemeProvider } from 'styled-components';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import colors from './constants/colors';
import data from './data/resume.json';
import 'font-awesome/css/font-awesome.min.css';

injectGlobal`
    body {
      font-family: 'Roboto', sans-serif;
      margin: 0;
      background: #f5f5f5;
      color: #545E6C;
      font-size: 14px;
      -webkit-font-smoothing: antialiased;
    }
`;

ReactDOM.render(
  <ThemeProvider theme={colors}>
    <App data={data} />
  </ThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
