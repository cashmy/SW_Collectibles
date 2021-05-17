import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function Footer() {
    return (
        <AppBar position="static" color="primary">
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