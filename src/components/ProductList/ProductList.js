import React, {useEffect, useState } from 'react';
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
import { Link as RouterLink, NavLink } from 'react-router-dom';
import ServiceLayer from '../../Services/serviceLayer'
import { Button } from '@material-ui/core';

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

const handleSubmit = (product, i) => {
  debugger;
   let cart = []
   if (i ==0){
  cart.push(product);
   }
  console.log(cart);
   return cart;
}


useEffect(() => {
  getProducts();
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

if (products){
  console.log(products)
}

  const classes = useStyles();

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
              </Link></Grid>
      <Grid container spacing={2} className={classes.grid} >
          {/* <Paper className={classes.paper} > */}
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Image</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Rating</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {products.map((product, i) => (
                        <TableRow key={i}>
                        <TableCell align="right">{product.productDescription}</TableCell>
                        <TableCell align="right">{product.productImage}</TableCell>
                        <TableCell align="right">{product.productPrice}</TableCell>
                        <TableCell align="right">{product.productAverageRating}</TableCell>
                        <TableCell align="right"><Button style={{backgroundColor: '#9C27B0'}} className="addToCart__btn" variant="outlined" onClick= {handleSubmit(product, i)} >Add To Cart</Button>
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
