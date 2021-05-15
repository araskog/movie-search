import { useDispatch } from "react-redux";
import { actions } from "../store/reducer";
import classes from "./SearchField.module.css";

const SearchField = ({ value }) => {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const searchValue = e.target.value.toString();
    dispatch(actions.updateSearch(searchValue));
  };

  return (
    <div className={classes.searchfield}>
      <input
        className={classes.searchinput}
        value={value}
        onChange={handleInputChange}
        placeholder="Search for movie titles..."
      ></input>
    </div>
  );
};

export default SearchField;
