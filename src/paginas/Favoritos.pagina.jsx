import { useEffect } from "react";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { charactersSelection } from "../Selection/Selection";
import { useAppSelector, useAppDispatch } from "../Hooks/thunk"
import "../componentes/personajes/tarjeta-personaje.componente";
/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {
    const { favourites } = useAppSelector((state) => state.characters);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(charactersSelection.actions.resetEpisodes());
    }, [dispatch]);

    return (
        <div className="container">
            <div className="actions">
                <h3>Favorites characters</h3>
                <button
                    className="reset-favs"
                    onClick={() => dispatch(charactersSelection.actions.resetFav())}
                >
                    Delete favorites
                </button>
                <button className="danger">Test button</button>
            </div>
            <div className="grid-characters">
                {favourites?.map((character) => (
        <GrillaPersonajes character={character} key={character.id} />
        ))}
    </div>
</div>
);
};

export default PaginaFavoritos