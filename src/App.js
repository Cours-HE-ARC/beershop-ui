import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BeerList from "./beer/BeerList";
import NavBar from "./layout/NavBar";
import PanierList from "./panier/PaniersList";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import KeycloakCmp from './keycloak/KeycloakCmp';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">

              <header className="App-header2">

                  <NavBar/>

              </header>

              <div className="App-body container">
                  <Route exact path="/" component={BeerList} />
                  <Route path="/bieres" component={BeerList}/>
                  <Route path="/panier" component={PanierList} />
                  <Route path="/keycloak" component={KeycloakCmp} />
                  <Route path="/secured" component={KeycloakCmp} />
              </div>

          </div>
        </Router>
    );
  }
}

export default App;
