import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Public from './Public';
import Secured from './Secured';


class KeycloakCmp extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <ul>
                        <li><Link to="/">public component</Link></li>
                        <li><Link to="/secured">secured component</Link></li>
                    </ul>
                    <Route exact path="/" component={Public} />
                    <Route path="/secured" component={Secured} />
                </div>
            </BrowserRouter>
        );
    }
}
export default KeycloakCmp;