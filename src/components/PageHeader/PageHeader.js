import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      grid: {
        padding: theme.spacing(2.5),
      },
      paper: {
        margin: theme.spacing(2.5),
      },
}));

export default function PageHeader(props) {
    
    const classes = useStyles();
    return (
        <div>
                <Paper elevation={3} className={classes.paper}> 
            <Grid container className={classes.grid} >
                    <Grid item style={{paddingLeft: 8}}>
                        Icon
                    </Grid>
                    <Grid item style={{paddingLeft: 24}}>
                        <Typography>
                            Page Header
                        </Typography>
                    </Grid>
            </Grid>
                </Paper>
        </div>
    )
}