import React from 'react'

const SearchInputs = (props) => {
    return(
        props.search_params.map((val, index) => {
            let name_campo = `campo-${index}`
            let name_elemento = `elemento-${index}` 
            return (
                <div className="form-group" key={index}>
                    <label htmlFor={name_campo}>Nome campo:</label>
                    <input 
                        type="text" 
                        className="campo"
                        name={name_campo}
                        data-id={index}
                        value={props.search_params[index].campo}
                    />
                    <label htmlFor={name_elemento}>Elemento CSS:</label>
                    <input 
                        type="text"
                        className="elemento"
                        name={name_elemento}
                        data-id={index}
                        value={props.search_params[index].elemento}
                    />
                </div>
            )
        })
    )
}

export default SearchInputs
