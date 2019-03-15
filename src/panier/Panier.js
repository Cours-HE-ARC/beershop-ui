import React, { Component } from 'react';
import axios from 'axios';

class Panier extends Component {



    componentDidMount() {
      /*  axios.get(`http://boutique-service-stage.jcloud.ik-server.com/biere`)
            .then(response => {
                const bieres = response.data;
                this.setState({ bieres });
                console.log(this.state)
            })*/
    }

    render() {
        return (
            <div className="Beers">
                <div className="card">
                    <div className="card-header">
                        <h4>Panier</h4>
                    </div>
                    <div className="card-body">

                    </div>
                </div>
            </div>
        );
    }
}

export default Panier;