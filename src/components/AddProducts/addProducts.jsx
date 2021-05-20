import React , {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Controls from '../controls/Controls';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { LocalConvenienceStoreOutlined, SettingsInputSvideoRounded } from '@material-ui/icons';
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

  const [product, setProduct] = useState({
    productDescription: '',
    productPrice: '',
    quantityOnHand: '',
    categoryId: '',
    productAverageRating: ''
  });

  async function handleSubmit(event){
    event.preventDefault();
    const data = {
    productDescription: product.productDescription,
    productPrice:product.productPrice,
    quantityOnHand: product.quantityOnHand,
    categoryId: product.categoryId,
    productAverageRating: product.productAverageRating
  }
  debugger;
  try{
    const jwt = localStorage.getItem('token')
    const response = await axios.post(`https://localhost:44394/api/Products`, data , {headers: {Authorization: 'Bearer ' + jwt}},);
    console.log(response); 
    setProduct({
      productDescription: data.productDescription,
      productPrice: data.productPrice,
      quantityOnHand: data.quantityOnHand,
      categoryId:data.categoryId,
      productAverageRating: data.productAverageRating

    });
  }catch(ex){
    console.log('Error in API call', ex.response.data);
  }
}
const onChangeProductDescription = (e) => {
  setProduct({
    ...product, productDescription: e.target.value
  })
}
const onChangeProductPrice = (e) => {
  setProduct({
    ...product, productPrice: parseFloat(e.target.value)
  })
}
const onChangeQuantityOnHand = (e) => {
  setProduct({
    ...product, quantityOnHand: parseInt(e.target.value)
  })
}
const onChangeCategoryId = (e) => {
  setProduct({
    ...product, categoryId: parseInt(e.target.value)
  })
}
const onChangeProductAverageRating = (e) => {
  setProduct({
    ...product, productAverageRating: parseFloat(e.target.value)
  })
}



  return (
    <form className={classes.root} noValidate onSubmit={handleSubmit}>
      <div>
        <Paper>
       <Grid> <TextField required id="standard-required"
      label="Product Name" 
      defaultValue="" 
      value={product.productDescription} 
      onChange={onChangeProductDescription}/>
      </Grid>
       <Grid> <TextField required id="standard-required"
       label="Product Price"
        defaultValue=""
        value={product.productPrice}
        onChange={onChangeProductPrice} />
        </Grid>
       <Grid> <TextField required id="standard-required" 
       label="Quantity"
       helperText="* means that entry is required" 
       defaultValue="" 
       value={product.quantityOnHand}
       onChange={onChangeQuantityOnHand}/></Grid>
      <Grid> <TextField required id="standard-required" 
       label="Category Id"
       helperText="* means that entry is required" 
       defaultValue="" 
       value={product.categoryId}
       onChange={onChangeCategoryId}/></Grid>
        <Grid> <TextField required id="standard-required" 
       label="Average Rating"
       helperText="* means that entry is required" 
       defaultValue="" 
       value={product.productAverageRating}
       onChange={onChangeProductAverageRating}/></Grid>
       <Grid>  <Controls.Button 
                type="submit"
                text="add product now"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                startIcon={<AddCircleOutlineIcon />}
              > Add</Controls.Button></Grid>
       {/* TODO: add upload image field */}
       {/* <Grid> <ImgField required id="standard-required" label="upload image of product" defaultValue="" /></Grid> */}
       </Paper>
      </div>
    </form>
  );
}


