import "./filtros.css";
import React , {FC} from "react";
import { useDispatch } from "<react-redux";
import {fetchCharactersThunk} from "rickAndMortyActions"


const Filtros:FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="filtros">
      <label for="nombre">Filtrar por nombre:</label>
      <input
        type="text"
        onChange={(e) => dispatch(fetchCharactersThunk(e.target.value))}
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nombre"
        autoFocus={true}
      />
    </div>
  );
};

export default Filtros;
