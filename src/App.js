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
import FooterContactInfo from "./components/Footer/FooterContactInfo";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <Header toggleMenu={this.toggleMenu} showMenu={this.state.showMenu}>
            <PortfolioHero />
          </Header> */}

          <Route
            exact
            path="/"
            component={() => (
              <Home
              // toggleMenu={this.toggleMenu}
              // showMenu={this.state.showMenu}
              />
            )}
          />
          <Route
            exact
            path="/about"
            component={() => (
              <About
              // toggleMenu={this.toggleMenu}
              // showMenu={this.state.showMenu}
              />
            )}
          />
          <Route
            exact
            path="/portfolio"
            component={() => (
              <Portfolio
              // toggleMenu={this.toggleMenu}
              // showMenu={this.state.showMenu}
              />
            )}
          />
          <Route
            exact
            path="/contact"
            component={() => (
              <Contact
              // toggleMenu={this.toggleMenu}
              // showMenu={this.state.showMenu}
              />
            )}
          />

          <FooterContactInfo />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
