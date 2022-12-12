import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { useLocation } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../hooks";
import { useEffect } from "react";
import { loadEpisodes, charactersSelection } from "../Selection/Selection"

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 * 
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 
 * Uso: 
 * ``` <PaginaDetalle /> ```
 * 
 * @returns la pagina de detalle
 */
const PaginaDetalle = () => {
    const location = useLocation();
    const character = location.state;

    const { favourites, episodes } = useAppSelector((state) => state.characters);
    const dispatch = useAppDispatch();

    const numberOfEpisodes = character.episode.map((episode) =>
        parseInt(episode.slice(40))
    );

    useEffect(() => {
        dispatch(charactersSelection.actions.getEpisodes(numberOfEpisodes));
        dispatch(loadEpisodes());
    }, []);

    return (
        <div className="container">
            <h3>{character.name}</h3>
            <div className={"detail"}>
                <div className={"detail-header"}>
                    <img src={character.image} alt={character.name} />
                    <div className={"detail-header-text"}>
                        <p>{character.name}</p>
                        <p>Planet: {character.origin.name}</p>
                        <p>Gender: {character.gender}</p>
                    </div>
                    <BotonFavorito
                        itsFavorite={!!favourites.find((obj) => obj.id === character.id)}
                        character={character}
                    />
                </div>
            </div>
            <h4>List of episodes in which the character appeared</h4>
            <div className={"episodes-grid"}>
                {Array.isArray(episodes) ? (
                    episodes.map((episode, index) => (
                        <TarjetaEpisodio episode={episode} key={index} />
                    ))
                ) : (
                    <TarjetaEpisodio episode={episodes} />
                )}
            </div>
        </div>
    );
};

export default PaginaDetalle