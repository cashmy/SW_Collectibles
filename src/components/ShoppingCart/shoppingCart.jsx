import React from 'react'
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PageHeader from '../PageHeader/PageHeader';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ServiceLayer from '../../Services/serviceLayer'
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import jwtDecode from 'jwt-decode';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
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
      },
      paper: {
        padding: theme.spacing(2),
        margin: 'auto',
      },

  table: {
    minWidth: 650,
  },
  
  
}));


//product['countInStock']   line 75  you would replate the number 5 with the products quantity that exist being sold on the website from the seller.gi

export default function BasicTable() {
  const jwt = localStorage.getItem('token');
  const classes = useStyles();
  const history = useHistory();

  const [cartItems, setCartItems] = useState([])
  const [userId, setUserId] = useState("");
  const [useEffectTrigger, setUseEffectTrigger] = useState(false)

  // ** cartItems from database are:
  // cartItem.userId
  // cartItem.productId
  // cartItem.productName
  // cartItem.productDescription
  // cartItem.quantity
  // cartItem.productPrice
  // cartItem.extPrice 

  useEffect(() => {
    if(jwt) {
      const user = jwtDecode(jwt);
      setUserId (user.id) ;
      getCart();
    }
    },[jwt]
    )

  useEffect(() => { 
    if (useEffectTrigger === true)
    {
      setUseEffectTrigger(false) ;
      getCart()
    }
  },[useEffectTrigger])

  async function getCart(){
    try{
        const response = await ServiceLayer.getUserCart();
        setCartItems(response.data);
        console.log(response.data)
    }
    catch(e){
        console.log("Get User's Shopping Cart API call unsuccessful", e)
    }
  }

  async function deleteCart(productId){
    try{
        const response = await ServiceLayer.deleteCart(productId);
        getCart();
    }
    catch(e){
        console.log('Delete Cart Item API call unsuccessful')
    }
  }

  const productDetails = (product) => {
    let id = product;
    history.push({
      pathname: '/productDetails',
      search: `?query=${product}`,
      state: {productId: id}
    })
  }

  async function updateCart(productId, body){
    try{
        const response = await ServiceLayer.editCart(productId, body);
        console.log(response.data)
    }
    catch(e){
        console.log("Get User's Shopping Cart API call unsuccessful", e)
    }
  }

  function handleCount(action, productId, quantity) {
    let newQuantity = 0;
    if (action === "add")
    {
      newQuantity = quantity + 1
    } else {
      newQuantity = quantity - 1
    }
    let newProduct = {
      'UserId' : userId,
      'ProductId' : productId, 
      'Quantity' : newQuantity,
    }
    updateCart(productId, newProduct)
    setUseEffectTrigger(true)
  }


  // function handleCountDec(index, productId, quantity){
  //   setCounter(counter - 1)

  // }

  return (
      <div div className={classes.layout}>
      <PageHeader 
        title="Shopping Cart"
        subtitle="Items you have currently chosen to purchase."
        icon={<ShoppingCartIcon/>}
      />     
      <Grid container spacing={2} className={classes.grid} >
          {/* <Paper className={classes.paper} > */}
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Product</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                      {cartItems.map((cartItem, i) => (

                        <TableRow key={i}>
                          <TableCell component="th" scope="row">{cartItem.productName}</TableCell>
                          <TableCell align="right">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cartItem.extPrice)}</TableCell>
                          <TableCell align="right">
                              <ButtonGroup size="small" aria-label="small outlined button group">
                                   <Button disabled={cartItem.quantity >= 50 } onClick={()=> {handleCount("add",cartItem.productId, cartItem.quantity)} }
                                   > + </Button>
                                  {<Button disabled>{cartItem.quantity} </Button>}
                                  {<Button disabled={cartItem.quantity <= 1} onClick={() => {handleCount("del", cartItem.productId, cartItem.quantity)} } 
                                  > - </Button>}
                              </ButtonGroup>
                          </TableCell>
                          <TableCell align="right">
                            <IconButton
                              color="primary"
                              onClick={() => productDetails(cartItem)}
                            >
                              <VisibilityIcon />
                            </IconButton> 
                            <IconButton
                              color="secondary"
                              onClick={() => deleteCart(cartItem.productId)}
                            >
                              <DeleteIcon />
                            </IconButton>                       
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

