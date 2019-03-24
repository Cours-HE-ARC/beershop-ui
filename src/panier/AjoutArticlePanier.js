import React, { Component } from 'react';

import ReactDom from 'react-dom';

class AjoutArticlePanier extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: this.props.defaultValue
        };

        this.onChange = (e) => this._onChange(e);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.value !== this.state.value) {
            this.props.onChange(this.state.value);
        }
    }

    _onChange(e) {
        let value = e.target.value;

        this.setState({value: value});
    }

    render() {
        return <input type="text" placeholder={this.props.placeholder} className="mm-popup__input" value={this.state.value} onChange={this.onChange} />;
    }

    /**
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h1>{this.props.text}</h1>
                    <button onClick={this.props.closePopup}>close me</button>
                </div>
            </div>
        );
    }*/
}


export default AjoutArticlePanier;