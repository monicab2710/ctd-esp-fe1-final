import './tarjeta-personaje.css';
import { Character } from '../../types/character.types';
import { Link } from 'react-router-dom';
import { useAppSelector } from "../../Hooks/thunk"
import BotonFavorito from '../botones/boton-favorito.componente';


type Props = {
  character: any;
  itsFavorite: any;
};

/**
 * tarjeta para cada personaje 
 * @returns a JSX.Element
 */



const TarjetaPersonaje = ({ character, itsFavorite }: Props) => {
  const { favourites } = useAppSelector((state) => state.characters);

  return (
    <div className="card-character">
      <Link
        to={`/detail/${character.name?.replace(/\s/g, "-")}/${character.id}`}
        state={character}
      >
        <img src={character.image} alt={character.name} />
      </Link>
      <div className="card-character-body">
        <span>{character.name}</span>
        <BotonFavorito
          itsFavorite={!!favourites.find((obj) => obj.id === character.id)}
          character={character}
        />
      </div>
    </div>
  );
};

export default TarjetaPersonaje;