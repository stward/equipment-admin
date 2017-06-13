import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class Edit extends Component {
  constructor (props) {
    super(props);
    this.state = {}
  }

  render () {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <TextField
            hintText="Hint Text"
          /><br />
          <TextField
            hintText="Hint Text"
          /><br />
          <TextField
            hintText="Hint Text"
          /><br />
          <TextField
            hintText="Hint Text"
          /><br />
          <TextField
            hintText="Hint Text"
          /><br />
          <TextField
            hintText="Hint Text"
          />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Edit
