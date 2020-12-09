import React from "react";

import { Button, makeStyles, Input, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import TuneIcon from "@material-ui/icons/Tune";
import PropTypes from "prop-types";

import FiltersDrawer from "../FiltersDrawer/FiltersDrawer";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "10px",
    marginBottom: "20px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    // alignment with above and below
    paddingRight: "26px",
  },
  searchField: {
    width: "100%",
    maxWidth: "580px",
    marginRight: "40px",
  },
  button: {
    padding: "4px 15px",
    // same width as Display + 2 buttons below
    width: "130.11px",
  },
}));

function Search({ searchValue, handleSearchValueChange, tabValue }) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div className={classes.container}>
        <Input
          className={classes.searchField}
          value={searchValue}
          onChange={handleSearchValueChange}
          placeholder={
            tabValue === 0
              ? "Search for map name, owner name, names of collaborators..."
              : "Search for shape name, owner name, names of collaborators..."
          }
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
        <Button
          variant="outlined"
          color="primary"
          endIcon={<TuneIcon />}
          onClick={() => setOpen(true)}
          classes={{ root: `${classes.button}` }}
        >
          Filters
        </Button>
      </div>
      <FiltersDrawer open={open} setOpen={setOpen} />
    </>
  );
}

Search.propTypes = {
  searchValue: PropTypes.string.isRequired,
  handleSearchValueChange: PropTypes.func.isRequired,
  tabValue: PropTypes.number.isRequired,
};

export default Search;
