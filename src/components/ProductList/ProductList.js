import React, {useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PageHeader from '../PageHeader/PageHeader';
import ListIcon from '@material-ui/icons/List';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Controls from '../controls/Controls';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import ServiceLayer from '../../Services/serviceLayer';
import jwtDecode from 'jwt-decode';
import TextField from '@material-ui/core/TextField';
import { Category } from '@material-ui/icons';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
        flexGrow: 1,
      },
      grid: {
        padding: theme.spacing(2.5),
      },
      paper: {
        padding: theme.spacing(2),
        margin: 'auto',
      },

  table: {
    minWidth: 650,
  },

}));


function ListProducts() {
  const jwt = localStorage.getItem('token');
  
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const classes = useStyles();
  const [searching, setSearching]= useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [sellerTitleDisabled, setSellerTitleDisabled] = useState(true);
  const [buyerTitleDisabled, setBuyerTitleDisabled] = useState(true);
  const [userId, setUserId] = useState("");
  
  async function addToCart(product){
    
    const data = {
      userId: userId,
        productId: product.productId,
        quantity: 1
    }
    try{    
      const response = await ServiceLayer.addToCart(product.productId, data);
      console.log(response.status);
    }catch(e){
      console.log('API call unsuccessful', e.response.data);
    }
}
  const history = useHistory();

  const viewProduct = (product) => {
    let id = product;
    history.push({
      pathname: '/productDetails',
      search: `?query=${product}`,
      state: {productId: id}
    })
  }

  useEffect(() => {
    if(jwt) {
      const user = jwtDecode(jwt);
      setUserId (user.id) ;
      getProducts();
      getCategories();
      if (user.isSupplier == "True") {
        setSellerTitleDisabled(false);
      } else {

        setBuyerTitleDisabled(false);
      }
    }
  },[])

async function getProducts(){

    try{
        const response = await ServiceLayer.getAllProducts();
        setProducts(response.data);
    }
    catch{
        console.log('API call unsuccessful')
    }
  }

const matchCategories = (product) => {

  let productCategories;

 categories.map(category => {
   if(product.categoryId === category.categoryId){
    productCategories = category.categoryDescription
   }
 })

 return productCategories
}


  async function getCategories(){
    try{
        const response = await ServiceLayer.getCategories();
        setCategories(response.data);
        console.log(response.data);
    }
    catch{
        console.log('API call unsuccessful')
    }
  }
   const mapProducts = () => {
        return (
          products.map((p, i) => (
          <TableRow key={i}>
            <TableCell align="right">{p.productName}</TableCell>
            <TableCell align="right">{p.productDescription}</TableCell>
            <TableCell align="right">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(p.productPrice)}</TableCell>
            <TableCell align="right">{p.productAverageRating}</TableCell>
            <TableCell align="right">{p.quantityOnHand}</TableCell>
            <TableCell align="right">{matchCategories(p)}</TableCell>
            <TableCell align="right">
              <Controls.Button
                onClick={() => addToCart(p)}
                color="primary.light" 
                text="Add To Cart"
                startIcon={<AddCircleOutlineIcon />}
              >
              </Controls.Button>
              <Controls.Button 
                    aria-label="product list"
                    color="primary.light" 
                    text="View Product Details"
                    startIcon={<AddCircleOutlineIcon />}
                    onClick={() => viewProduct(p.productId)}
                  > </Controls.Button>
            </TableCell>
          </TableRow>
        ))
    
        )} 

  const handleInputForProduct = (event) => {

    let targetValue = event.target.value;
    console.log(event.target.value)


    const filteredProducts = products.filter(element => {
      console.log(element);
      let categoryName = [];
      categories.forEach(category => {
        console.log(category);
        if(category.categoryId === element.categoryId){
          categoryName = category.categoryDescription;
        }
      })


      if(event.target.value === ""){
        getProducts();
        return products;
      }
    
      else if (element.productName.includes(targetValue) || categoryName.includes(targetValue)){
        console.log(element)  
        return element
      };

    })
    setProducts(filteredProducts)
    console.log(filteredProducts)
  }


  


  return (
      <div>
      <PageHeader 
        title="Product List"
        subtitle="Complete list of all available products for sale."
        icon={<ListIcon/>}
      />    
      <Grid container spacing={2} className={classes.grid}>
      {sellerTitleDisabled === false && <Link component={RouterLink} to={'addProducts'}  >
              <Fab 
              className={classes.addButton}
              aria-label = "add"
              color="secondary" 
              text="Add New Products"
              > <AddIcon/></Fab>
              </Link>}

              </Grid>
              <center><Paper style = {{width:"38%"}}><Grid  className={classes.grid}>
                <TextField
                id= "filled-size-small"
                variant="outlined"
                label="Search Name or Category" 
                defaultValue="" 
                onChange={handleInputForProduct}
                 />
                </Grid> </Paper></center>
      <Grid container spacing={1} className={classes.grid} >
          {/* <Paper className={classes.paper} > */}
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Description</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Rating</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Category</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {mapProducts(products)}
                    </TableBody>
                </Table>
            </TableContainer>
        {/* </Paper> */}
    </Grid>
    </div>
  );
}

export default ListProducts
