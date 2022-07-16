import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DataLayer } from './Datalayer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <DataLayer initialState reducer> */}
      <App />
      {/* </DataLayer> */}
    
  </React.StrictMode>
);
