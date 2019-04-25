import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Panier from "../panier/PaniersList";



class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Accueil</a>
                <button className="navbar-toggler" type="button" data-toggle="dropdown" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">


                        <li className="nav-item dropdown">
                            <a className="btn btn-secondary dropdown-toggle" role="button" id="navbarDropdown" href="#" data-toggle="dropdown">
                                Menu
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item"  to="/panier">Panier</Link>
                                <Link className="dropdown-item"  to="/bieres">Bières</Link>
                                <Link className="dropdown-item" to="/keycloak">KeyCloak Component Test</Link>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/basic">Concepts de bases</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" hrefLang="/produits">Liste Produits</a>
                                <a className="dropdown-item" href="/saisie_produits">Saisie Produits</a>

                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>

                        </li>



                        <li className="nav-item active">
                            <a className="nav-link" href="/">
                                <span></span>
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>


                    </ul>

                </div>
            </nav>
        );
    }
}

export default NavBar;