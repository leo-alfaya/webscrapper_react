import React, { Component } from 'react'

import SearchInputs from './SearchInputs'

class FormAddBusca extends Component {
    constructor() {
        super();
        this.state = {
            url: "http://www.g1.com.br",
            block: ".bloco-noticia",
            search_params: [
                { campo: "", elemento: ""},
            ]
        }

        this.addElementSearch = this.addElementSearch.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    addElementSearch(e) {
        this.setState({
            search_params: [...this.state.search_params, { campo: "", elemento: "" }]
        }) 

        e.preventDefault()
    }

    handleChange(e) {
        let element = e.target

        if(["campo", "elemento"].includes(element.className)) {
            let search_params = [...this.state.search_params] 
            search_params[element.dataset.id][element.className] = element.value
            this.setState({search_params})            
        } else {
            this.setState({
                [element.name]: element.value 
            })
        }
    }

    handleSubmit(e) {
        console.log(this.state)
        e.preventDefault()
    }

    render() {
        return(
            <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="url">Url: </label>
                    <input type="text" name="url" value={this.state.url} onChange={this.handleInputChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="block">Block: </label> 
                    <input type="text" name="block" value={this.state.block} onChange={this.handleInputChange}/>
                </div>
                <SearchInputs search_params={this.state.search_params}></SearchInputs>
                <button onClick={this.addElementSearch}>Adiciona Elemento</button>
                <button>Add busca</button>
            </form>
        )
    }
}

export default FormAddBusca
