import "./paginacion.css";
import { useAppSelector, useAppDispatch } from "../../Hooks";
import { charactersSelection } from "../../Selection/Selection";
/**
 * @returns un JSX element
 */
const Paginacion = () => {
  const dispatch = useAppDispatch();

  const { characters } = useAppSelector((state) => state.characters);
  function nextPage() {
    dispatch(charactersSelection.actions.nextPage());
  }

  function prevPage() {
    dispatch(charactersSelection.actions.prevPage());
  }

  return (
    <div className="pagination">
      <button
        disabled={characters.info?.prev == null ? true : false}
        className={"primary"}
        onClick={prevPage}
      >
        Previous
      </button>
      <button
        disabled={characters.info?.next == null ? true : false}
        className={"primary"}
        onClick={nextPage}
      >
        Next
      </button>
    </div>
  );
};

export default Paginacion;
