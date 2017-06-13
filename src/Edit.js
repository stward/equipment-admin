import TextField from 'material-ui/TextField'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import React, { Component } from 'react'

const propTypes = {
  classes: PropTypes.object
}

const styles = {
  editContainer: {
    '& div': {
      display: 'block'
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
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div className={classes.editContainer}>
          <h1>Edit Equipment</h1>
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
      </MuiThemeProvider>
    )
  }
}

Edit.propTypes = propTypes

export default enhancer(Edit)
