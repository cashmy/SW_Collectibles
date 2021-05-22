import React, { useState, useEffect } from 'react';
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
import HistoryIcon from '@material-ui/icons/History';
import ServiceLayer from '../../Services/serviceLayer';
import Controls from '../controls/Controls'

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

function OrderDetails(){
  const history = useHistory();
  const classes = useStyles();

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

  function handleCancel() {
    history.goBack();
  }

    return (
        <div className={classes.layout}>
          <PageHeader 
            title="Order Information"
            subtitle="All information for the specific order you selected."
            icon={<HistoryIcon/>}
          /> 
          
        <Grid container spacing={2} className={classes.grid} >
          <Paper className={classes.paper} >
          <Grid item>
            <center style={{marginTop: "2rem"}}>Order Number: Date Purchased</center>
          </Grid>

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
            <Controls.Button
              color='default'
              text='Cancel'
              onClick={handleCancel}
            />
        </Paper>
    </Grid>
                
        </div>
    )
}

export default OrderDetails;