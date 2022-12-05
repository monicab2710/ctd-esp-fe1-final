import { Reducer } from "@reduxjs/toolkit"
import Character from "../../types/character.types";
import rickAndMortyActions from "../../redux/actions/rickAndMortyActions"

export interface CharactersState {
    search: string;
    status: "LOADING" | "COMPLETED",
    character: Character[],
    error: string | null
}


const initialState: CharactersState = {
    search: "",
    status: "COMPLETED",
    character: [],
    error: null
};

const charactersReducer: Reducer<CharactersState, rickAndMortyActions> =
    (state = initialState, action): CharactersState => {
        switch (action.type) {
            case 'FETCH-CHARACTER':
                return {
                    ...state,
                    search: action.name,
                    error: null
                }
            case 'FETCH-CHARACTER-SUCCESS':
                return {
                    ...state,
                    status: "COMPLETED",
                    character: action.Character
                }
            case 'FETCH-CHARACTER-ERROR':
                return {
                    ...state,
                    status: "COMPLETED",
                    error: action.message

                }

            default:
                return state;

        }

    }

export default charactersReducer;