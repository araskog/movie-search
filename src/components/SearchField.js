import { useDispatch } from "react-redux";
import { actions } from "../store/reducer";
import classes from "./SearchField.module.css";

const SearchField = () => {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(actions.updateSearch(e.target.value));
  };

  return (
    <div className={classes.searchfield}>
      <input
        className={classes.searchinput}
        type="text"
        onChange={handleInputChange}
        placeholder="Search for a movie title..."
      ></input>
    </div>
  );
};

export default SearchField;
