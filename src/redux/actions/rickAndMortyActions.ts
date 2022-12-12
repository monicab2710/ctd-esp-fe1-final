import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit"
import { fetchCharactersActionAPI } from "../../services/character.services"
import Character from "../../types/character.types"
import { IRootState } from "../store"

export interface FetchCharactersAction extends Action {
    type: 'FETCH-CHARACTER',
    name: string,
}

export interface FetchCharactersSuccessAction extends Action {

    type: 'FETCH-CHARACTER-SUCCESS',
    character: Character[]
}

export interface FetchCharactersErrorAction extends Action {

    type: 'FETCH-CHARACTER-ERROR',
    error: string
}

export interface BuscarPersonajesThunkAction extends ThunkAction<void, IRootState, unknown, FetchCharactersAction | FetchCharactersSuccessAction | FetchCharactersErrorAction>{}


export const fetchCharactersAction: ActionCreator<FetchCharactersAction> = (search: string) => {
    return {
        type:
            'FETCH-CHARACTER',
       name:search 
    }
}

export const fetchCharactersSuccessAction: ActionCreator<FetchCharactersSuccessAction> = (character: Character[]) => {
    return {
        type: 'FETCH-CHARACTER-SUCCESS',
        character: character
    }
}

export const fetchCharactersErrorAction: ActionCreator<FetchCharactersErrorAction> = (error: string) => {
    return {
        type: 'FETCH-CHARACTER-ERROR',
        error: error
    }
}

const MINIMUM_CHARS_TO_SEARCH = 3; 

export const buscarPersonajesThunk = (name: string): BuscarPersonajesThunkAction => {
    return async (dispatch, getState) => {
        if (name.length >= MINIMUM_CHARS_TO_SEARCH){
            dispatch(fetchCharactersAction(name))
            try{
                const response = await fetchCharactersActionAPI(name);
                dispatch(fetchCharactersSuccessAction(response))
            }catch(e){
                dispatch(fetchCharactersErrorAction(e))
            }
        }
    }
}


export type CharactersAction =
    | ReturnType<typeof fetchCharactersAction>
    | ReturnType<typeof fetchCharactersSuccessAction>
    | ReturnType<typeof fetchCharactersErrorAction>
