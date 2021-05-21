import React, {useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
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
import AddIcon from '@material-ui/icons/Add';
import Controls from '../controls/Controls';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import ServiceLayer from '../../Services/serviceLayer'

const useStyles = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginLeft: theme.spacing(1.5),
    marginRight: theme.spacing(1.5),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  addButton: {
    marginLeft: theme.spacing(1),
  },
}));

function ListCategories() {
  const [categories, setCategories] = useState([])

const addToCart = (category, i) => {
  let cart = []
  if (i === 0){
  cart.push(category);
  }
  console.log(cart);
  return cart;
}

const history = useHistory();

const editCategory = (category) => {

  history.push(`categoryDetails/${category}`);
}

useEffect(() => {
  getCategories();
},[])

async function getCategories(e){
  try{
      const response = await ServiceLayer.getCategories();
      setCategories(response.data);
  }
  catch(e){
      console.log('API call unsuccessful', e)
  }
}

  const classes = useStyles();

  return (
      <div className={classes.layout}>
      <PageHeader 
        title="Category List"
        subtitle="Complete list of all category groupings for products."
        icon={<ListIcon/>}
      />    
      <Paper className={classes.paper} >
          {/* <Paper className={classes.paper} > */}
      <Grid className={classes.buttons}> 
        <Link component={RouterLink} to={'addCategory'}>
          <Fab 
            className={classes.addButton}
            color="secondary" 
            aria-label="add"
            size="small"
            >
            <AddIcon />
          </Fab>
        </Link>
      </Grid>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="right">Description</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {categories.map((category, i) => (
                        <TableRow key={i}>

                        <TableCell align="right">{category.categoryDescription}</TableCell>
                        <TableCell align="right">
                          <Controls.Button 
                                aria-label="product list"
                                color="primary.light" 
                                text="Edit"
                                startIcon={<AddIcon />}
                                onClick={() => editCategory(category.categoryId)}
                              > </Controls.Button>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        {/* </Paper> */}
    </Paper>
    </div>
  );
}

export default ListCategories
