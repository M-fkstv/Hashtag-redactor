import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { Provider } from 'react-redux';
import './index.css';
import store, { persistor } from './assets/store.tsx';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={<p>...loading</p>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
);
