import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import configureStore from './store/configureStore';
import Products from './containers/products';
import Header from './containers/Header';
const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      	<div>
	      	<Header/>
	        <Products />
        </div>
      </Provider>
    );
  }
}

export default App;
