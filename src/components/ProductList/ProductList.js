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
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import PageHeader from '../PageHeader/PageHeader';
import ListIcon from '@material-ui/icons/List';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Controls from '../controls/Controls';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import ServiceLayer from '../../Services/serviceLayer'

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
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const classes = useStyles();

  const addToCart = (product, i) => {
    let cart = []
    if (i === 0){
    cart.push(product);
    }
  }
  const history = useHistory();

  const viewProduct = (product) => {
    history.push(`productDetails/${product}`);
  }

  useEffect(() => {
    getProducts();
    getCategories();
  },[])

async function getProducts(e){
    try{
        const response = await ServiceLayer.getAllProducts();
        setProducts(response.data);
    }
    catch(e){
        console.log('API call unsuccessful', e)
    }
  }

  async function getCategories(e){
    try{
        const response = await ServiceLayer.getCategories();
        setCategories(response.data);
    }
    catch(e){
        console.log('API call unsuccessful', e)
    }
  }

  const handleInput = (event) => {
    setProducts({search:event.target.value});
    const filteredProducts = getProducts.filter(element => {
      if(event.target.value === ""){
        getProducts();
        return element
      }
      return element.productName.includes(products.search)
    })
    setProducts({
      products: filteredProducts
    })
  }


  return (
      <div>
      <PageHeader 
        title="Product List"
        subtitle="Complete list of all available products for sale."
        icon={<ListIcon/>}
      />    
      <Grid> <Link component={RouterLink} to={'addProducts'}  >
              <Controls.Button 
                aria-label="product list" 
                color="primary.light" 
                text="Add New Products"
                startIcon={<AddCircleOutlineIcon />}
              > Add New Products</Controls.Button>
              </Link>
              <Link component={RouterLink} to={'addCategory'}  >
              <Controls.Button 
                aria-label="product list" 
                color="primary.light" 
                text="Add A Category"
                startIcon={<AddCircleOutlineIcon />}
              > Add New Products</Controls.Button>
              </Link>
              </Grid>
              <Paper><Grid> 
                <TextField required id="standard"
                label="Search By Name" 
                defaultValue="" 
                onChange={handleInput}
                 />
                </Grid></Paper>
      <Grid container spacing={2} className={classes.grid} >
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
                    {products.map((product, i) => (
                        <TableRow key={i}>
                        <TableCell align="right">{product.productName}</TableCell>
                        <TableCell align="right">{product.productDescription}</TableCell>
                        <TableCell align="right">{product.productPrice}</TableCell>
                        <TableCell align="right">{product.productAverageRating}</TableCell>
                        <TableCell align="right">{product.quantityOnHand}</TableCell>
                        <TableCell align="right">{product.categoryId}</TableCell>
                        <TableCell align="right">
                          <Controls.Button
                            onClick={() => addToCart(product, i)}
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
                                onClick={() => viewProduct(product.productId)}
                              > </Controls.Button>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        {/* </Paper> */}
    </Grid>
    </div>
  );
}

export default ListProducts
