import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import i18nConfigEN from './i18n/en';
import App from './app/App';
import store from './app/configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app/styles/main.scss';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <IntlProvider locale={i18nConfigEN.locale} messages={i18nConfigEN.messages}>
        <App />
      </IntlProvider>
    </React.StrictMode>
  </Provider>,
  rootElement,
);
