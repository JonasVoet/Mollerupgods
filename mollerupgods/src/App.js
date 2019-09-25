import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import Header from './components/header/Header';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Shop from './components/products/Shop';
// import Intro from './components/intro/Intro';
import News from './components/news/News';
import Articles from './components/articles/Article';
// import Outro from './components/outro/Outro';
// import Footer from './components/footer/Footer';


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact className="active" path="/" component={Home} />
          <Route path="/ballet" component={News} />
          <Route path="/contact" component={Contact} />
          <Route path="/news" component={Articles} />
          <Route path="/webshop" component={Shop} />


        </Switch>
        <Footer />


      </div>
    </BrowserRouter>
  );
};

export default App;
