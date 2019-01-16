import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addBusca } from '../../store/actions/buscasActions'

import SearchInputs from './SearchInputs'

class Buscas extends Component {
    constructor(){
        super();
        this.state = {
            url: "",
            block: "",
            search_params: {
                "Campo 1": "",
                "Campo 2": "",
                "Campo 3": ""
            }
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.addBuscaClick = this.addBuscaClick.bind(this)
        this.addElemento = this.addElemento.bind(this)
    }

    handleInputChange(event) {
        this.setState({
            texto: event.target.value
        })
    }

    addBuscaClick() {
        this.props.addBusca(this.state.texto)
    }

    addElemento(event) {
        event.preventDefault()

        this.setState(Object.assign(this.state.search_params, {"Campo 4": ""}))
    }

    render(){
        return(
            <div className="buscas-container">
                <form>
                    <div className="form-group">
                        <label>Url: </label>
                        <input type="text" name="url" value={this.state.url} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label>Block: </label> 
                        <input type="text" name="block" value={this.state.block} onChange={this.handleInputChange}/>
                    </div>
                    <SearchInputs search_params={this.state.search_params}></SearchInputs>
                    <button onClick={this.addElemento}>Adiciona Elemento</button>
                    <button onClick={this.addBuscaClick}>Add busca</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = store => ({
    buscas: store.buscas
})

const mapDispatchToProps = dispatch => 
    bindActionCreators({ addBusca }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Buscas);
