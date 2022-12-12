import Character from "../types/character.types"

export const fetchCharactersActionAPI = async (nombre?: string): Promise<Character[]> => {
    let params = "?"
    if (nombre){
        params += `name=${nombre}`
    }
    return fetch(`https://rickandmortyapi.com/api/character/${params}`)
        .then(data => data.json())
        .then(data => data.results)
}