import classes from "./PageButtons.module.css";

// Controls for display of results per page
const PageButtons = ({
  handleNextPage,
  handlePrevPage,
  totalPages,
  pageNumber,
}) => (
  <div className={classes.pagebuttons}>
    <button
      className={classes.button}
      type="button"
      onClick={handlePrevPage}
      disabled={pageNumber === 1}
    >
      Previous Page
    </button>
    <p>{`${pageNumber} / ${totalPages}`}</p>
    <button
      className={classes.button}
      type="button"
      onClick={handleNextPage}
      disabled={pageNumber === totalPages}
    >
      Next Page
    </button>
  </div>
);

export default PageButtons;
