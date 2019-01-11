const initialState = {
    list: [
        {
            texto: "teste"    
        }
    ]
}

const buscasReducers = (state = initialState, action) => {
    switch(action.type){
        case "ADD_BUSCA":
            console.log(action.texto)
            return Object.assign({}, state, {
                list: [
                    ...state.list,
                    {
                        texto: action.texto
                    }
                ]
            })
        default:
            return state
    }
}

export default buscasReducers;