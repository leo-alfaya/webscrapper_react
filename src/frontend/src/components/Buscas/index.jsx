import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addBusca } from '../../store/actions/buscasActions'

class Buscas extends Component {
    constructor(){
        super();
        this.state = {
            url: "",
            block: "",
            search_params: {
                "1": "teste_1",
                "2": "teste_2",
                "3": "teste_3"
            }
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.addBuscaClick = this.addBuscaClick.bind(this)
    }

    handleInputChange(event) {
        this.setState({
            texto: event.target.value
        })
    }

    addBuscaClick() {
        this.props.addBusca(this.state.texto)
    }

    render(){
        return(
            <div className="buscas-container">
                <input type="text" name="url" value={this.state.url} onChange={this.handleInputChange}/>
                <input type="text" name="block" value={this.state.block} onChange={this.handleInputChange}/>
                {Object.keys(this.state.search_params).map((key, index) => {
                    return(
                        <p key={index}>{this.state.search_params[key]}</p>
                    )  
                })}
                <button onClick={this.addBuscaClick}>Add busca</button>
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
