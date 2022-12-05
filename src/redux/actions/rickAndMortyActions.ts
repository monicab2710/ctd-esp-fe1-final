import { Action, ActionCreator } from "@reduxjs/toolkit"


export interface FetchCharactersAction extends Action {

    type: 'FETCH-CHARACTER',
    name: name
}

export interface FetchCharactersSuccessAction extends Action {

    type: 'FETCH-CHARACTER-SUCCESS',
    character: character
}

export interface FetchCharactersErrorAction extends Action {

    type: 'FETCH-CHARACTER-ERROR',
    message: string
}

export const fetchCharactersAction: ActionCreator<FetchCharactersAction> = (name:name) => {
    return {
        type:
            'FETCH-CHARACTER',
        name: name
    }
}

export const fetchCharactersSuccessAction: ActionCreator<FetchCharactersSuccessAction> = (character: character) => {
    return {
        type: 'FETCH-CHARACTER-SUCCESS',
        character: character
    }
}

export const fetchCharactersErrorAction: ActionCreator<FetchCharactersErrorAction> = ( message: message) => {
    return {
        type: 'FETCH-CHARACTER-SUCCESS',
        message: message
    }


}

export type CharactersAction =
    ReturnType<typeof fetchCharactersAction>
    ReturnType<typeof fetchCharactersSuccessAction>
    ReturnType<typeof fetchCharactersErrorAction>









export const getCharacter = (name: String): any => {
    return (dispatch: any) => {
        dispatch(fetchCharacter())
        axios.get(`https://rickandmortyapi.com/api/character/${name}`)
            .then(res => {
                dispatch(fetchCharacterSuccess(res.data))
            })
            .catch(error => {
                dispatch(fetchCharacterError(error))
            })
    }
}