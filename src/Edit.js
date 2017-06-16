import TextField from 'material-ui/TextField'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import React, { Component } from 'react'

const propTypes = {
  classes: PropTypes.object
}

const styles = {
  editContainer: {
    '& div': {
      display: 'block',
      verticalAlign: 'top'
    }
  },
  paperStyle: {
    paddingLeft: '20%',
    paddingRight: '20%',
    marginLeft: 'auto',
    marginRight: 'auto%',
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: '#e0e0e0'
  }
}

const buttonStyle = {
  margin: 20,
  className: 'buttonStyle',
  border: 'solid black 1px',
  backgroundColor: '#e0e0e0'
};

const enhancer = injectSheet(styles)

class Edit extends Component {
  constructor (props) {
    super(props);
    this.state = {}
  }

  render () {
    const {classes} = this.props

    return (
      <div>
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <RaisedButton label="Back" primary={false} style={buttonStyle} href={'/home'} />
        </MuiThemeProvider>
      </div>
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Paper className={classes.paperStyle} zDepth={1}>
        <div className={classes.editContainer}>
          <h1>Edit / Create Details</h1>
          <TextField
            floatingLabelText="Equipment Name"
          />
          <TextField
            floatingLabelText="LTL"
          />
          <TextField
            floatingLabelText="Max Length"
          />
          <TextField
            floatingLabelText="Max Width"
          />
          <TextField
            floatingLabelText="Max Height"
          />
          <TextField
            floatingLabelText="Max Weight"
          />
          <TextField
            floatingLabelText="OD Length"
          />
          <TextField
            floatingLabelText="OD Width"
          />
          <TextField
            floatingLabelText="OD Height"
          />
          <TextField
            floatingLabelText="OD Weight"
          />
          <TextField
            floatingLabelText="OD Bump"
          />
          <TextField
            floatingLabelText="Rate"
          />
        </div>
        <RaisedButton label="Submit" primary={false} style={buttonStyle} href={'/home'} />
        </Paper>
      </MuiThemeProvider>
      </div>
    )
  }
}

Edit.propTypes = propTypes

export default enhancer(Edit)
