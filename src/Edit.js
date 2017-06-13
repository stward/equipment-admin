import React from 'react'
import TextField from 'material-ui/TextField'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const Edit = () => (
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
    /><br />
  </div>
  </MuiThemeProvider>
)

export default Edit
