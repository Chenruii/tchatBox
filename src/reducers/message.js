    // combiner les redux
    import { combineReducers } from 'redux'
    import ADD_MESSAGE from '../actions/message'

    
    // creer reducers reducx
const INITIAL_STATE = {
    entities: [
        {message: 'kjk'}
    ]
    };
    const messages = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case 'ADD_MESSAGE':
    return {
    entities: [...state.entities, {message: action.message}]
    }
    default:
    return state
    }
    }
    
    





const reducers = combineReducers({
messages,
})


export default reducers