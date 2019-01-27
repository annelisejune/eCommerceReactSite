import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navigation from "./nav.js";
import Footer from "./footer.js";
import Home from "./pages/home.js";
import Store from "./pages/store.js";
import About from "./pages/about.js";
import Contact from "./pages/contact.js";


export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <Navigation />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/store" component={Store} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </Router> 

        <Footer />
      </div>
    );
  }
}

