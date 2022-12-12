import "./boton-favorito.css"; 
import { charactersSelection } from "../../Selection/Selection";
import { useState } from "react";
import { useAppDispatch } from "../../Hooks/thunk";

/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * @returns un JSX element 
 */
const BotonFavorito = ({ itsFavorite, character }) => {
  const [favorite, setFavorite] = useState(itsFavorite);
  const dispatch = useAppDispatch();

  function handleChange() {
    if (favorite) {
      setFavorite(false);
      dispatch(charactersSelection.actions.deleteFav(character));
    } else {
      setFavorite(true);
      dispatch(charactersSelection.actions.addFav(character));
    }
  }

return (
  <div className="button-favorite">
    <img
      src={favorite ? "/imagenes/star-filled.png" : "/imagenes/star.png"}
      alt={"favorite"}
      onClick={() => handleChange()}
    />
  </div>
);
};
export default BotonFavorito;
