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

function createData(ordernumber, price, date, actions) {
  return { ordernumber, price, date, actions };
}

const rows = [
  createData('0001', 100, "01/01/2001"),
  createData('0002', 200, "01/01/2001"),
  createData('0003', 300,"01/01/2001"),
  createData('0004', 400, "01/01/2001"),
  createData('0005', 500, "01/01/2001")
];

export default function BasicTable() {
  const classes = useStyles();

  return (
      <div>
      <PageHeader />    
      <Grid container spacing={2} className={classes.grid} >
          {/* <Paper className={classes.paper} > */}
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>OrderID</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Date</TableCell>
                        <TableCell align="right">Order Details</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                            {row.ordernumber}
                        </TableCell>
                        <TableCell align="right">{row.price}</TableCell>
                        <TableCell align="right">{row.date}</TableCell>
                        <TableCell align="right">{row.actions}</TableCell>
                        <Link to = {'orderDetails'}>
                        Order Details
                        </Link>
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

