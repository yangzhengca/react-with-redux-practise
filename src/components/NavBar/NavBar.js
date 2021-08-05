import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import useStyles from "./styles";
import { Link } from "react-router-dom";

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="primary"
            aria-label="menu"
          >
            <Link to="/" color="secondary">
              <HomeIcon color="action" />
            </Link>
          </IconButton>

          <Link to="/add" color="primary">
            Add
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
