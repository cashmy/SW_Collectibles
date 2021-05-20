import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  footer: {
    // padding: theme.spacing(3, 2),
    marginTop: 'auto',
    position: 'fixed',
    bottom: 0,
    left: 0,
  },
}));


export default function Footer() {
  const classes = useStyles();
    return (
        <AppBar position="static" color="primary" className={classes.footer}>
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                &copy; {new Date().getFullYear()} Copyright: CDRS Software, Ltd.
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}