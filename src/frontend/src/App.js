import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addBusca } from './store/actions/buscasActions'

class App extends Component {
    constructor(){
        super();
        this.state = {
            texto: ""
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
            <div className="App">
                <input type="text" name="buscas" value={this.state.texto} onChange={this.handleInputChange}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
