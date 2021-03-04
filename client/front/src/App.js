import React from 'react'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './App.css';

//Screens
import shopScreen from './screens/Shop';
import homeScreen from './screens/Home';
import aboutScreen from './screens/About'
import singleProductScreen from './screens/SingleProduct';

//Components
import Header from './components/Header';
import FooterTop from './components/FooterTop';
import FooterBottom from './components/FooterBottom';
import cartScreen from './screens/Cart';


function App() {
  return (
  <div>
    <Router>
      <Header />
        <Switch>
          <Route exact path='/' component={homeScreen} />
          <Route path='/shop' component={shopScreen} />
          <Route path='/products/:id' component={singleProductScreen} />
          <Route path='/about' component={aboutScreen} />
          <Route path='/cart' component={cartScreen} />

        </Switch>
      <FooterTop />
      <FooterBottom />
    </Router>
  </div>
  );
}

export default App;
