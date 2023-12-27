import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './assets/components/App/App.tsx';
import { Provider } from 'react-redux';
import './index.css';
import store, { persistor } from './assets/store/store.tsx';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<p>...loading</p>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
