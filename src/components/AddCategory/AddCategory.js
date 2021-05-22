import React , {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Controls from '../controls/Controls';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Paper from '@material-ui/core/Paper';
// import axios from 'axios';
// import { LocalConvenienceStoreOutlined, SettingsInputSvideoRounded } from '@material-ui/icons';
import serviceLayer from '../../Services/serviceLayer';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(800 + theme.spacing(2) * 2)]: {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();
  const history = useHistory();


  const [category, setCategory] = useState({
    categoryDescription: ''
  });

  function handleCancel(){
    history.goBack();
  }

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
    <form className={classes.layout} noValidate onSubmit={handleSubmit}>
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
                text="Add"
                variant="contained"
                color="primary"
                className={classes.submit}
                startIcon={<AddCircleOutlineIcon />}
              > Add</Controls.Button>
              <Controls.Button
              color='default'
              text='Cancel'
              onClick={handleCancel}
            /></Grid>
      
       </Paper>
      </div>
    </form>
  );
}

