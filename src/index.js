import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import { CssBaseline } from '@mui/material';
import exportedObject from './components/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider as ReduxProvider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <React.StrictMode>
    <CssBaseline />
    <ReduxProvider store={exportedObject.store}>
        <HelmetProvider>
          <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <PersistGate loading={null} persistor={exportedObject.persister}>
                <App />
            </PersistGate>
          </BrowserRouter>
        </HelmetProvider>
    </ReduxProvider>
  </React.StrictMode>,
);