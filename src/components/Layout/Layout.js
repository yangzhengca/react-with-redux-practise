import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import NavBar from "../NavBar/NavBar"

export default function Layout(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="lg">
        <Typography className='classes.div' component="div">
            {props.children}
        </Typography>
      </Container>
    </React.Fragment>
  );
}