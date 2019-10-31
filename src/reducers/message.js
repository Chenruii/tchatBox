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
    case 'GET_MESSAGES_PENDING':
        return Object.assign({}, state, {loading : true});
    case 'GET_MESSAGES_SUCCESS':
        return Object.assign({}, state, {loading : true});
    case 'GET_MESSAGES_ERROR':
        return Object.assign({}, state, {loading : true});
    default:
    return state
    }
    }
const reducers = combineReducers({
messages,
})


export default reducers