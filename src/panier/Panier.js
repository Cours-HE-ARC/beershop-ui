import React, { Component } from 'react';
import axios from 'axios';

class Panier extends Component {

    state = {
        panier: {},
    }

    componentDidMount() {
      axios.get(`/boutique/panier/4f1eda32-ec75-4fce-8d40-aa2d5f26208a`)
            .then(response => {
                const panier = response.data;
                this.setState({ panier });
                console.log(this.state.panier)
            })
    }

    render() {
        return (
            <div className="Beers">
                <div className="card">
                    <div className="card-header">
                        <h4>Panier</h4>
                    </div>
                    <div className="card-body">
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">N°</th>
                                <th scope="col">Fabricant</th>
                                <th scope="col">Type</th>
                                <th scope="col">Contenance</th>
                                <th scope="col">Prix</th>
                                <th></th>

                            </tr>
                            </thead>
                            <tbody>



                                    <tr key={this.state.panier.noPanier}>
                                        <td>{this.state.panier.noPanier}</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            </td>
                                    </tr>


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Panier;