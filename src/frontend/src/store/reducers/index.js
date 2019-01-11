import { combineReducers } from 'redux';

import buscasReducers from './buscasReducers';

const rootReducers = combineReducers({
    buscas: buscasReducers
})

export default rootReducers;
