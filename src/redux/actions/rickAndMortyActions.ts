import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit"
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
    message: string
}

export const fetchCharactersAction: ActionCreator<FetchCharactersAction> = (name: string) => {
    return {
        type:
            'FETCH-CHARACTER',
        name: name
    }
}

export const fetchCharactersSuccessAction: ActionCreator<FetchCharactersSuccessAction> = (character: Character[]) => {
    return {
        type: 'FETCH-CHARACTER-SUCCESS',
        character: character
    }
}

export const fetchCharactersErrorAction: ActionCreator<FetchCharactersErrorAction> = (message: string) => {
    return {
        type: 'FETCH-CHARACTER-ERROR',
        message: message
    }
}

export type CharactersAction =
    | ReturnType<typeof fetchCharactersAction>
    | ReturnType<typeof fetchCharactersSuccessAction>
    | ReturnType<typeof fetchCharactersErrorAction>

export interface FetchCharactersThunk extends ThunkAction<void, IRootState, unknown, CharactersAction> { }

export const fetchCharactersThunk = (name: string): FetchCharactersThunk => {
    return async (dispatch, getState) => {
        dispatch(fetchCharactersAction(name))
        try {
            const response = await fetchCharactersActionAPI(name)
            dispatch(fetchCharactersSuccessAction(response))
        } catch (error) {
            dispatch(fetchCharactersErrorAction(error))
        }
    }

}



