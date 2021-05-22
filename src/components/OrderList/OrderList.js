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
import HistoryIcon from '@material-ui/icons/History';

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

function createData(ordernumber, price, date, actions) {
  return { ordernumber, price, date, actions };
}

const rows = [
  createData('0001', 100.00, "01/01/2001"),
  createData('0002', 200.00, "01/01/2001"),
  createData('0003', 300,"01/01/2001"),
  createData('0004', 400, "01/01/2001"),
  createData('0005', 500, "01/01/2001")
];

export default function BasicTable() {
  const classes = useStyles();

  return (
      <div className={classes.layout}>
      <PageHeader 
        title="Order History"
        subtitle="Full listing of all your complete orders."
        icon={<HistoryIcon/>}
      />     
      <Grid container spacing={2} className={classes.grid} >
          {/* <Paper className={classes.paper} > */}
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>OrderID</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Date</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                            {row.ordernumber}
                        </TableCell>
                        <TableCell align="right">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(row.price)}</TableCell>
                        
                        <TableCell align="right">{row.date}</TableCell>
                        <TableCell align="right">                       
                        <Link to = {'orderDetails'}>
                          Order Details
                        </Link></TableCell>
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

