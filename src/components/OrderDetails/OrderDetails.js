import React, { useState, useEffect } from 'react';
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
import HistoryIcon from '@material-ui/icons/History';
import ServiceLayer from '../../Services/serviceLayer';


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

    const [details, setOrderDetails] = useState([]);

    useEffect(() => {
        getDetails();

      },[])

    async function getDetails(e){
        debugger;
        try{
        
            const response = await ServiceLayer.getOrderDetails();
            setOrderDetails(response.data);
           
        }
        catch(e){
            console.log('API call unsuccessful', e.response.data)
        }
    }


    const classes = useStyles();

    return (
        <div>
                  <PageHeader 
        title="Product List"
        subtitle="Complete list of all available products for sale."
        icon={<HistoryIcon/>}
      /> 
          
        <div><center style={{marginTop: "2rem"}}>Order Number: Date Purchased</center></div>
        <Grid container spacing={2} className={classes.grid} >
          {/* <Paper className={classes.paper} > */}
          <Grid item xs={2} style={{marginBottom: "2rem"}}>
            Address Line 1 & address line 2
          </Grid>
          <Grid item xs={2} style={{marginBottom: "2rem"}} align="center">
          Town
          </Grid>
          <Grid item xs={2} style={{marginBottom: "2rem"}} align="center">
              State
          </Grid>
          <Grid item xs={2} style={{marginBottom: "2rem"}} align="center">
            Zipcode
          </Grid>
          <Grid item xs={2} style={{marginBottom: "2rem"}} align="center">
            Country
          </Grid>


            <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="right"><Paper><center>Product Name</center></Paper></TableCell>
                        <TableCell align="right"><Paper><center>Product Price</center></Paper></TableCell>
                        <TableCell align="right"><Paper><center>Quantity Ordered</center></Paper></TableCell>
                        <TableCell align="right"><Paper><center>Total Price</center></Paper></TableCell>
                     
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {details.map((orderDetails, i) => (
                        <TableRow key={i}>
                        <TableCell align="right"><Paper><center>{orderDetails.ProductId}</center></Paper> </TableCell>
                        <TableCell align="right"><Paper><center>{orderDetails.ProductPrice}</center></Paper></TableCell>
                        <TableCell align="right"><Paper><center>{orderDetails.Quantity}</center></Paper> </TableCell>
                        <TableCell align="right"><Paper><center>{orderDetails.ExtPrice}</center></Paper></TableCell>

                        </TableRow>
                    ))}
                       </TableBody>
                </Table>
            </TableContainer>
        {/* </Paper> */}
    </Grid>
                
        </div>
    )
}

export default OrderDetails;