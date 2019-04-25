import React, { Component } from 'react';
import axios from 'axios';

class PanierList extends Component {

    state = {
        paniers: [],
    }

    componentDidMount() {
        console.log("did mount")
      axios.get(`/boutique/panier`)
            .then(response => {
                console.log("resp")
                const paniers = response.data;
                this.setState({ paniers });
                console.log(this.state.paniers)
            })
    }

    render() {
        return (
            <div className="Beers">
                <div className="card">
                    <div className="card-header">
                        <h4>Panier</h4>
                    </div>

                    { this.state.paniers.map(panier => {
                        return (
                            <div className="card">
                            <div className="card-header">
                                <h4>{panier.noPanier}</h4>
                            </div>
                            <div className="card-body">


                                        <label>{panier.articles.length}</label>

                            </div>
                            </div>

                        )
                    })}


                    <div className="card-body">
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">N°</th>
                                <th scope="col">Status</th>
                                <th scope="col">Type</th>
                                <th scope="col">Contenance</th>
                                <th scope="col">Prix</th>
                                <th></th>

                            </tr>
                            </thead>
                            <tbody>

                            { this.state.paniers.map(panier => {
                                return (
                                    <tr key={panier.noPanier}>
                                        <td>{panier.noPanier}</td>
                                        <td>{panier.status}</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            </td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default PanierList;