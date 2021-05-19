import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
       <Grid> <TextField required id="standard-required" label="Product Name" defaultValue="" /></Grid>
       <Grid> <TextField required id="standard-required" label="Product Price" defaultValue="" /></Grid>
       <Grid> <TextField required id="standard-required" label="Product Description" defaultValue="" /></Grid>
       <Grid> <TextField required id="standard-required" label="Quantity"helperText="* means that entry is required" defaultValue="" /></Grid>
       {/* TODO: add upload image field */}
       {/* <Grid> <ImgField required id="standard-required" label="upload image of product" defaultValue="" /></Grid> */}
      </div>
    </form>
  );
}


