import React from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import ReactJson from "react-json-view";

import "./App.css";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  paper: {
    fontWeight: "bold",
    fontSize: "20px",
    width: "45vw",
  },
  control: {
    padding: theme.spacing(2),
  },
  multiline: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),

    fontWeight: "bold",
    fontSize: "20px",
    color: "purple",
    width: "45vw",
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  updateText(text) {
    this.setState({ text });
  }

  render() {
    const { classes } = this.props;

    var textJson = {};
    try {
      textJson = JSON.parse(this.state.text);
    } catch (e) {
      // do nothing
    }

    return (
      <div className="App">
        <div>
          <p>
            <h1>年轻人的第一个JSON Previewer</h1>
          </p>
        </div>
        <Grid container className={classes.root} direction="row" spacing={3}>
          <Grid item xs={6}>
            <TextField
              className={classes.multiline}
              multiline
              label="Multiline"
              rows={10}
              rowsMax={Infinity}
              variant="outlined"
              placeholder={this.state.text}
              onChange={(e) => {
                this.updateText(e.target.value);
              }}
            />
          </Grid>
          <Grid item alignContent="flex-start" xs={6}>
            <ReactJson src={textJson} indentWidth={8} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
