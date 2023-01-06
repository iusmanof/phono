import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css';
import App from './App';
import { apiSlice } from './features/api/apiSlice';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';

const container = document.getElementById('root')!;
const root = createRoot(container);



root.render(
  <React.StrictMode>
      {/* <Provider store={store}> */}
      <ApiProvider api={apiSlice}>
        <App />
      </ApiProvider>
    {/* </Provider> */}
  </React.StrictMode>
);

