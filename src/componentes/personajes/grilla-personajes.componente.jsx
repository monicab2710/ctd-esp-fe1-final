import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { useEffect } from "react";
import { charactersSelection} from "../../Selection/Selection"
import { loadCharacters, loadFilterCharacters } from "../../Selection/Selection"
import { useAppSelector, useAppDispatch } from "../../Hooks/thunk"
/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * @returns un JSX element 
 */
const GrillaPersonajes =  () => {
    const { characters, loading, filter, page } = useAppSelector(
        (state) => state.characters
    );
    const dispatch = useAppDispatch();

    useEffect(() => {
        filter === ""
            ? dispatch(loadCharacters())
            : dispatch(loadFilterCharacters());
        dispatch(charactersSelection.actions.resetEpisodes());
    }, [page, filter, dispatch]);

    if (loading) return <div> Loading...</div>;

    return (
        <div className="grid-characters">
            {characters.results?.map((character) => (
                < TarjetaPersonaje character={character} key={character.id} />
            ))}
        </div>
    );
};

export default GrillaPersonajes;