import React , {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Controls from '../controls/Controls';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Paper from '@material-ui/core/Paper';
import PageHeader from '../PageHeader/PageHeader';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import ListIcon from '@material-ui/icons/List';
// import { LocalConvenienceStoreOutlined, SettingsInputSvideoRounded } from '@material-ui/icons';
// import serviceLayer from '../../Services/serviceLayer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // '& .MuiTextField-root': {
    //   margin: theme.spacing(1),
    //   width: '25ch',
    // },
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
  grid: {
    padding: theme.spacing(2.5),
    marginTop: theme.spacing(2.5),
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();
  const history = useHistory();
  function handleCancel(){
    history.goBack();
  }
  const [product, setProduct] = useState({
    productDescription: '',
    productPrice: '',
    quantityOnHand: '',
    categoryId: '',
    productAverageRating: '',
    productName: ''
  });

  async function handleSubmit(event){
    event.preventDefault();
    debugger;
    const data = {
      productDescription: product.productDescription,
      productPrice:product.productPrice,
      quantityOnHand: product.quantityOnHand,
      categoryId: product.categoryId,
      productAverageRating: product.productAverageRating,
      productName: product.productName
  }
  
  try{
    const jwt = localStorage.getItem('token')
    const response = await axios.post(`https://localhost:44394/api/Products`, data , {headers: {Authorization: 'Bearer ' + jwt}});
    console.log(response); 
    setProduct({
      productDescription: data.productDescription,
      productPrice: data.productPrice,
      quantityOnHand: data.quantityOnHand,
      categoryId:data.categoryId,
      productAverageRating: data.productAverageRating,
      productName: data.productName
    });
    return(
     <Paper> <Grid><TextField>Product was sucessfully added!</TextField></Grid></Paper>
    )
  }catch(ex){
    console.log('Error in API call', ex.response.data);
  }}
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
    // const onChangeProductAverageRating = (e) => {
    //   setProduct({
    //     ...product, productAverageRating: parseFloat(e.target.value)
    //   })
    // }
    const onChangeProductName = (e) => {
      setProduct({
        ...product, productName: e.target.value
      })

    }
  return (
    <div className={classes.layout}>
      <PageHeader 
        title="Add Product"
        subtitle="Seller - Add a new product to your inventory."
        icon={<ListIcon/>}
      />  
      <form noValidate onSubmit={handleSubmit}>
        <Paper classsName={classes.paper}>
        <Grid className={classes.grid} container spacing={2}>
        <Grid item xs={12}> 
          <TextField
            variant="outlined"
            required id="standard-required"
            label="Product Name" 
            fullWidth
            defaultValue="" 
            value={product.productName} 
            onChange={onChangeProductName}/>
      </Grid>
       <Grid item xs={12}> 
         <TextField 
          variant="outlined"
          required id="standard-required"
          label="Product Description" 
          fullWidth
          defaultValue="" 
          value={product.productDescription} 
          onChange={onChangeProductDescription}/>
      </Grid>
      <Grid item xs={12}> 
        <TextField 
          variant="outlined"
          required id="standard-required" 
          label="Category"
          defaultValue="" 
          value={product.categoryId}
          onChange={onChangeCategoryId}/>
       </Grid>
       <Grid item xs={6} > 
         <TextField 
            variant="outlined"
            required id="standard-required"
            label="Product Price"
            defaultValue=""
            value={product.productPrice}
            onChange={onChangeProductPrice} />
        </Grid>
       <Grid item xs={6}> 
         <TextField 
            variant="outlined"
            required id="standard-required" 
            label="Quantity"
            helperText="* means that entry is required" 
            defaultValue="" 
            value={product.quantityOnHand}
            onChange={onChangeQuantityOnHand}/>
       </Grid>

        {/* <Grid> <TextField required id="standard-required" 
       label="Average Rating"
       helperText="* means that entry is required" 
       defaultValue="" 
       value={product.productAverageRating}
       onChange={onChangeProductAverageRating}/></Grid> */}
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
       {/* TODO: add upload image field */}
       {/* <Grid> <ImgField required id="standard-required" label="upload image of product" defaultValue="" /></Grid> */}
       </Grid>
       </Paper>
    </form>
    </div>
  );
}


