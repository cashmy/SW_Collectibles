import React from 'react';
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

function OrderDetails(){

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


    const classes = useStyles();

    return (
        <div>
              <PageHeader /> 
          
        <div><center style={{marginTop: "2rem"}}>Order Number</center></div>
        <Grid> Address, City, State</Grid>
               
      <Grid container spacing={2} className={classes.grid} >
          {/* <Paper className={classes.paper} > */}
            <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="right">Product Name</TableCell>
                        <TableCell align="right">Product Price</TableCell>
                        <TableCell align="right">Quantity Ordered</TableCell>
                        <TableCell align="right">Total Price</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
        
                        <TableRow>
                        <TableCell align="right">  Product.Name </TableCell>
                        <TableCell align="right">Product.Price</TableCell>
                        <TableCell align="right">Product.Quantity </TableCell>
                        <TableCell align="right">Product.TotalPrice</TableCell>
                        </TableRow>
                       </TableBody>
                </Table>
            </TableContainer>
        {/* </Paper> */}
    </Grid>
                
        </div>
    )
}

export default OrderDetails;