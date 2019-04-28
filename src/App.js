import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  appBar: {
    backgroundColor: "#333"
  }
});

class App extends Component {
  render() {
    const { appBar } = this.props.classes;
    return (
      <div>
        <AppBar className={appBar} color="primary" position="static">
          <Toolbar>
            <Typography color="inherit" variant="title">
              My Header
            </Typography>
            <Button color="inherit">Test</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(App);
