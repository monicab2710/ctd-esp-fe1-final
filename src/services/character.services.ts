/**
 * Used to get all characters from the API
 * 
 * @param {string} characterName
 * @returns a json response with all characters
 */

export const fetchCharactersActionAPI = async (characterName: string = "") => {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character/?page=" + characterName
    );
    return response.json();
  };
  export const fetchCharacters = async (characterName: string = "") => {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character/?page=" + characterName
    );
    return response.json();
  };
  export const getByFilterCharacters = async (pageAndName: {
    page: string;
    name: string;
  }) => {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character/?page=" +
        pageAndName.page +
        "&name=" +
        pageAndName.name
    );
    return response.json();
  };
  

  export const fetchEpisodes = async (pageNumber: number[]) => {
    const response = await fetch(
      "https://rickandmortyapi.com/api/episode/" + pageNumber
    );
    return response.json();
  };