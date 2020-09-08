import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
    </div>
  );
}

export default App;
