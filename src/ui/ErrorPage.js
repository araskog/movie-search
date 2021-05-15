import classes from "./ErrorPage.module.css";

const ErrorPage = ({ message }) => (
  <div className={classes.error}>{message}</div>
);

export default ErrorPage;
