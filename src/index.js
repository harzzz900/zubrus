import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from 'sonner';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <Toaster richColors position='top-center' />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

