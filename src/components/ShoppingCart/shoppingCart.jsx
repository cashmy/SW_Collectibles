

import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
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
import ButtonGroup from "@material-ui/core/ButtonGroup";



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


//product['countInStock']   line 75  you would replate the number 5 with the products quantity that exist being sold on the website from the seller.

export default function BasicTable() {
  const classes = useStyles();
  const [counter, setCounter] = useState(0);


  return (
      <div>
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
                        <TableCell align="right">Remove From Cart</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
           
                        <TableRow>
                        <TableCell component="th" scope="row">Super Fast RC car</TableCell>
                        <TableCell align="right">50$</TableCell>
                            <TableCell align="right">
                            <ButtonGroup size="small" aria-label="small outlined button group">
                            <Button disabled={counter >= 50 } onClick={()=> 
                            {setCounter(counter+1)}}>+</Button>
                        {<Button disabled>{counter}</Button>}
                        {<Button disabled={counter <= 0} onClick={() => {
                            setCounter(counter - 1)
                            }}>-</Button>}
                    </ButtonGroup>
                    </TableCell>
                        <TableCell align="right">                       
                        <button> RunFunction() </button> </TableCell>

 
                        </TableRow>
       
                    </TableBody>
                </Table>
            </TableContainer>
        {/* </Paper> */}
    </Grid>
    </div>
  );
}
