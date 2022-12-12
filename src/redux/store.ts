import {combineReducers} from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import {TypedUseSelectorHook, useSelector as useReduxSelector} from "react-redux";
import rickandMortyReducer from "../redux/reducers/rickandMortyReducer"
import thunk from "redux-thunk";



const rootReducer = combineReducers({
   Characters:rickandMortyReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector


export const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk))
)