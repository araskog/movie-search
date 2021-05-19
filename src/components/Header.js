import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions } from "../store/reducer";
import classes from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();

  const handleMoveToStart = () => {
    dispatch(actions.resetSearch());
  };

  return (
    <header className={classes.header}>
      <Link to={`/`} onClick={handleMoveToStart} className={classes.link}>
        <div className={classes.logo}> 🎬 Movie Search</div>
      </Link>
    </header>
  );
};
export default Header;
