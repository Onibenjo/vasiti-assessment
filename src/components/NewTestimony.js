import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { Grid } from "@material-ui/core";

const NewTestimony = ({ open, handleClose }) => {
  const [name, setName] = useState("Cat in the Hat");
  const [value, setValue] = useState("female");

  const handleChangeVal = (event) => {
    setValue(event.target.value);
  };
  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Share your amazing story</DialogTitle>
      <DialogContent>
        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          value={name}
          onChange={handleChange}
        />
        <Grid container>
          <Grid item xs={6}>
            <TextField
              id="fname"
              label=""
              variant="outlined"
              value={name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="lname"
              label=""
              variant="outlined"
              value={name}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <TextField
          id="share-story"
          label=""
          variant="outlined"
          value={name}
          onChange={handleChange}
          multiline
          rowsMax={4}
        />
        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          multiline
          rows={4}
          value={name}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <FormControl component="fieldset">
          <FormLabel component="legend">labelPlacement</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={handleChangeVal}>
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" variant="contained">
          Share your story
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewTestimony;
