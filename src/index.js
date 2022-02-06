import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import AppProvider from './context';
import Pages from './routes/index.routes';

ReactDOM.render(
    <BrowserRouter>
      <AppProvider>
        <Pages />
      </AppProvider>
    </BrowserRouter>,
  document.getElementById('root')
);
