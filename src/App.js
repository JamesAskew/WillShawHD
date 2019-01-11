import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./assets/css/odometer.min.css";
import "./assets/css/fancybox.min.css";
import "./assets/css/swiper.min.css";
import "./assets/css/isolayer.css";
import "./assets/css/bootstrap.min.css";
import "./App.css";

import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import Contact from "./components/pages/Contact/Contact";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
