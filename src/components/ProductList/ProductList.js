import React from 'react';
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

function createData(name, calories, fat, carbs, protein, actions) {
  return { name, calories, fat, carbs, protein, actions };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 0),
  createData('Eclair', 262, 16.0, 24, 6.0, 0),
  createData('Cupcake', 305, 3.7, 67, 4.3, 0),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 0),
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
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        <TableCell align="right">Actions&nbsp;(g)</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                        <TableCell align="right">{row.actions}</TableCell>
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

