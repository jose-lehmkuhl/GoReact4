import React from 'react';
import './config/reactotron';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart, faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons';
import store from './store';
import GlobalStyle from './styles/global';
import { Content } from './styles/components';
import Header from './components/Header';
import Routes from './routes';

library.add([faShoppingCart, faTimes, faSpinner]);

const App = () => (
  <Provider store={store}>
    <div className="app">
      <GlobalStyle />
      <BrowserRouter>
        <Content>
          <Header />
          <Routes />
        </Content>
      </BrowserRouter>
    </div>
  </Provider>
);

export default App;
