import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <Link to={`/`} className={classes.link}>
        <div className={classes.logo}> 🎬 Movie Search</div>
      </Link>
    </header>
  );
};
export default Header;
