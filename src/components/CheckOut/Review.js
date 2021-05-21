import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import ServiceLayer from '../../Services/serviceLayer'

// const shoppingCartItems = [
//   { productName: 'Product 1', productDescription: 'A nice thing', extPrice: '$9.99' },
//   { productName: 'Product 2', productDescription: 'Another thing', extPrice: '$3.45' },
//   { productName: 'Product 3', productDescription: 'Something else', extPrice: '$6.51' },
//   { productName: 'Product 4', productDescription: 'Best thing of all', extPrice: '$14.11' },
//   { productName: 'Shipping', productDescription: '', price: 'Free' },
// ];

const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    getCart();
  },[])

  async function getCart(e){
    try{
        const response = await ServiceLayer.getUserCart();
        console.log(response.data)
        setCartItems(response.data);
    }
    catch(e){
        console.log('API call unsuccessful', e)
    }
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cartItems.map((cartItem) => (
          <ListItem className={classes.listItem} key={cartItem.productId}>
            <ListItemText primary={cartItem.productName} secondary={cartItem.productDescription} />
            <Typography variant="body2">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cartItem.extPrice)}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            $34.06
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}