import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { notasReducer } from './reducers/notasReducer'
import thunk from 'redux-thunk'
import { rickandMortyReducer } from './reducers/rickandMortyReducer'

const rootReducers = combineReducers({
    notitas: notasReducer,
    pokemon: rickandMortyReducer
})

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)))