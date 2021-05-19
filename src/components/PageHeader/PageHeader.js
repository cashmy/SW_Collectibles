import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1.5),
        flexGrow: 1,
    },
    pageHeader: {
        padding: theme.spacing(1),
        display: 'flex',
        marginBottom: theme.spacing(1),
      },
      pageIcon: {
        display: 'inline-block',
        padding: theme.spacing(2),
        color: theme.palette.primary.light,
      },
      pageTitle: {
          paddingLeft: theme.spacing(4),
          '& .MuiTypography-subtitle2': {
              opacity: '0.6'
          }
      },
}));

export default function PageHeader(props) {
    
    const {title, subtitle, icon} = props
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper elevation={3} > 
                <Grid container className={classes.pageHeader} >
                        <Grid item className={classes.pageIcon}>
                            {icon}
                        </Grid>
                        <Grid item className={classes.pageTitle}>
                            <Typography variant="h6" >
                                {title}
                            </Typography>
                            <Typography variant="subtitle2" >
                                {subtitle}
                            </Typography>
                        </Grid>
                </Grid>
            </Paper>
        </div>
    )
}