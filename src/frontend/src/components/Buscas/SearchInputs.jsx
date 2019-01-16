import React, { Component } from 'react'

class SearchInputs extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
        this.setState({...this.props.search_params})
    }

    render() {
        return(
            Object.keys(this.props.search_params).map((key, index) => {
                return(
                    <div className="form-group" key={index}>
                        <label>Nome do Campo: </label>
                        <input value={key}></input>
                        <label>Elemento: </label>
                        <input value={this.props.search_params[key]}></input>
                    </div>
                )  
            })
        )
    }
}

export default SearchInputs
