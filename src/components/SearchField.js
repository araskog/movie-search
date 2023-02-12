import { useDispatch } from "react-redux";
import { actions } from "../store/reducer";
import classes from "./SearchField.module.css";

const SearchField = () => {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    if (e.target.value.length > 2) {
      dispatch(actions.updateSearch(e.target.value));
    }
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
