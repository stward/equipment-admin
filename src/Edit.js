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
    width: '50%',
    display: 'inline-block',
    verticalAlign: 'top',
    '& div': {
      display: 'block'
    }
  },
  paper: {
    paddingTop: '3%',
    paddingLeft: '10%',
    margin: '0 auto',
    display: 'block',
  },
  button: {
    margin: 12,
    borderRadius: 20,
    border: 'solid black 1px',
    '& a': {
      borderRadius: 20
    }
  }
}

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
          <RaisedButton className={classes.button} label="Back" primary={false} href={'/'} />
        </MuiThemeProvider>
      </div>
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Paper className={classes.paper} zDepth={1}>
        <h1>Edit / Create Details</h1>
        <div className={classes.editContainer}>
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
        <div className={classes.editContainer}>
          <TextField
            floatingLabelText="Day Cost"
          />
          <TextField
            floatingLabelText="Day Cost Max Distance"
          />
          <TextField
            floatingLabelText="Escort Height"
          />
          <TextField
            floatingLabelText="Escort Rate Bump"
          />
          <TextField
            floatingLabelText="Escort Width"
          />
          <TextField
            floatingLabelText="Escort Length"
          />
          <TextField
            floatingLabelText="Int'l Border Cost Bump %"
          />
          <TextField
            floatingLabelText="LTL Int'l Rate Bump %"
          />
          <TextField
            floatingLabelText="LTL Max Length %"
          />
          <TextField
            floatingLabelText="LTL Max Weight %"
          />
          <TextField
            floatingLabelText="LTL Short Load Length Limit"
          />
          <TextField
            floatingLabelText="LTL Rate Bump"
          />
          <TextField
            floatingLabelText="OD US Permit Fee"
          />
          <TextField
            floatingLabelText="OD Width"
          />
          <TextField
            floatingLabelText="Overweight Interval"
          />
          <TextField
            floatingLabelText="Overweight Rate Bump"
          />
          <TextField
            floatingLabelText="Overweight Threshold"
          />
        </div>
        <RaisedButton className={classes.button} label="Submit" primary={false} href={'/home'} />
        </Paper>
      </MuiThemeProvider>
      </div>
    )
  }
}

Edit.propTypes = propTypes

export default enhancer(Edit)
