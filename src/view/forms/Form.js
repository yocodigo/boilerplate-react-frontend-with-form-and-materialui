import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "15ch"
      }
    }
  })
);

export function ItemForm(props) {
  const [item, setItem] = useState("");
  const classes = useStyles();

  const handleSubmit = evt => {
    evt.preventDefault();
    alert(`Submitting Item ${item}`);
  };

  return (
    <form
      className={classes.root}
      noValidate
      autocomplete="on"
      onSubmit={handleSubmit}
    >
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue={item}
        variant="outlined"
        onChange={e => setItem(e.target.value)}
      />
      <TextField
        id="filled-basic"
        // label="Filled"
        variant="filled"
        type="submit"
        // value="Submit"
      />
    </form>
  );
}
