import React, { Component } from 'react';
import axios from 'axios';
import AjoutArticlePanier from "../panier/AjoutArticlePanier";



class BeerList extends Component {

    state = {
        bieres: [],
        showPopup: false
    }

    componentDidMount() {
        axios.get(`http://boutique-service-stage.jcloud.ik-server.com/biere`)
            .then(response => {
                const bieres = response.data;
                this.setState({ bieres });
                console.log(this.state)
            })
    }

    showAjoutArticleForm() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    render() {
        return (
            <div className="Beers">
                <div className="card">
                    <div className="card-header">
                        <h4>Bières</h4>
                    </div>
                    <div className="card-body">
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">Nom</th>
                                <th scope="col">Fabricant</th>
                                <th scope="col">Type</th>
                                <th scope="col">Contenance</th>
                                <th scope="col">Prix</th>
                                <th></th>

                            </tr>
                            </thead>
                            <tbody>

                            { this.state.bieres.map(biere => {
                                return (
                                    <tr key={biere.noArticle}>
                                        <td>{biere.nom}</td>
                                        <td>{biere.fabricant}</td>
                                        <td>{biere.type}</td>
                                        <td>{biere.contenanceL}</td>
                                        <td>{biere.prix}</td>
                                        <td>
                                            <button onClick={this.showAjoutArticleForm.bind(this)} type="button" className="btn btn-secondary btn-sm">Ajout panier</button>
                                        </td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
                {this.state.showPopup ?
                    <AjoutArticlePanier
                        text='Close Me'
                        closePopup={this.showAjoutArticleForm.bind(this)}
                    />
                    : null
                }
            </div>
        );
    }
}

export default BeerList;