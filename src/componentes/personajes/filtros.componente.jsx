import "./filtros.css";
import { useAppDispatch, useAppSelector } from "../../Hooks";
import {charactersSelection} from "../../CharacterSelection";


const Filtros =() => {
  const dispatch = useAppDispatch();
  const { filter } = useAppSelector((state) => state.characters);

  return (
      <div className="filters">
          <label htmlFor="name">Filtrar por nombre:</label>
          <div>
              <input
                  type="text"
                  placeholder="Rick, Morty, Beth, Alien, ...etc"
                  name="name"
                  value={filter}
                  onChange={(e) => {
                      dispatch(charactersSelection.actions.filter(e.target.value));
                      dispatch(charactersSelection.actions.resetPage());
                  }}
              />
              <button onClick={() => {
                  dispatch(charactersSelection.actions.resetfilter());
                  dispatch(charactersSelection.actions.resetPage());
              }}>
                  Clean Filters
              </button>
          </div>
      </div>
  );
};

export default Filtros;
