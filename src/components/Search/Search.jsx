import React from "react";

import { Button, makeStyles, Input, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import TuneIcon from "@material-ui/icons/Tune";

import FiltersDrawer from "../FiltersDrawer/FiltersDrawer";

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: "20px",
    maxWidth: "720px",
  },
  searchField: {
    width: "100%",
    maxWidth: "480px",
    marginRight: "40px",
  },
  button: {
    position: "absolute",
    // top: "0",
    padding: "4px 15px",
  },
}));

function Search() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  return (
    <div className={classes.container}>
      <Input
        id="input-with-icon-adornment"
        className={classes.searchField}
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
      <FiltersDrawer open={open} setOpen={setOpen} />
    </div>
  );
}

export default Search;
