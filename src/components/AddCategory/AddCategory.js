import React , {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Controls from '../controls/Controls';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { LocalConvenienceStoreOutlined, SettingsInputSvideoRounded } from '@material-ui/icons';
import serviceLayer from '../../Services/serviceLayer';
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

  const [category, setCategory] = useState({
    categoryDescription: ''
  });

  async function handleSubmit(event){
    event.preventDefault();
    debugger;
    const data = {
    categoryDescription: category.categoryDescription
  }
  try{
    const response = await serviceLayer.createCategory(data);
    console.log(response);
    setCategory({
      categoryDescription: data.categoryDescription,
    });
  }catch(ex){
    console.log('Error in API call', ex.response.data);
  }
}
const onChangeCategoryDescription = (e) => {
  setCategory({
    ...category,categoryDescription: e.target.value
  })
}


  return (
    <form className={classes.root} noValidate onSubmit={handleSubmit}>
      <div>
        <Paper>
       <Grid> <TextField required id="standard-required"
      label="Category Name" 
      defaultValue="" 
      value={category.categoryDescription} 
      onChange={onChangeCategoryDescription}
      helperText="* means that entry is required" />
      </Grid>
      <Grid>  <Controls.Button 
                type="submit"
                text="add category now"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                startIcon={<AddCircleOutlineIcon />}
              > Add</Controls.Button></Grid>
      
       </Paper>
      </div>
    </form>
  );
}

