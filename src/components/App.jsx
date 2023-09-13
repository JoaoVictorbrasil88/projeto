import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import Vitrine from './Vitrine.jsx';
import { ProductDetail } from './ProductDetail.jsx';
import Sobre from './AboutPage.jsx';
import CustomerForm from './CustomerForm.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/vitrine" component={Vitrine} />
        <Route path="/produtos/:id" component={ProductDetail} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/cadastro" component={CustomerForm} /> 
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;

