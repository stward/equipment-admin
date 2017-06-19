import allEquipment from './equipment'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import {
  List,
  ListItem
} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Divider from 'material-ui/Divider'
import FaWrench from 'react-icons/lib/fa/wrench'
import injectSheet from 'react-jss'
import React, { Component } from 'react'

const styles = {
  button: {
    margin: '15px 0px 40px 15px',
    borderRadius: 20,
    border: 'solid black 1px',
    backgroundColor: '#e0e0e0',
    '& a': {
      borderRadius: 20,
      '& :hover': {
        backgroundColor: 'transparent'
      }
    },
    '& :hover': {
      backgroundColor: 'rgba(0,0,0,0.08)'
    }
  },
  tableItem: {
    border: 'black solid 5px',
    backgroundColor: '#e0e0e0',
  },
  col: {
    verticalAlign: 'top'
  }
}

const enhancer = injectSheet(styles)

class HomeContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {}
  }

  renderEquipment() {
    const {classes} = this.props

    return allEquipment.map((x) => (
      <div>
        <Table>
          <TableBody displayRowCheckbox={false}>
            <TableRow className={classes.tableItem}>
              <TableRowColumn>
                <h2><a href={'/edit'}><FaWrench />{x.name}</a></h2>
                <List>
                  <ListItem><b>LTL</b>: {String(x.ltl)}</ListItem>
                  <Divider />
                  <ListItem><b>Max Length</b>: {String(x.maxLength)}</ListItem>
                  <Divider />
                  <ListItem><b>Max Width</b>: {String(x.maxWidth)}</ListItem>
                  <Divider />
                  <ListItem><b>Max Height</b>: {String(x.maxHeight)}</ListItem>
                  <Divider />
                  <ListItem><b>Max Weight</b>: {String(x.maxWeight)}</ListItem>
                  <Divider />
                  <ListItem><b>OD Length</b>: {String(x.odLength)}</ListItem>
                </List>
              </TableRowColumn>
              <TableRowColumn>
                <List>
                  <ListItem><b>OD Width</b>: {String(x.odWidth)}</ListItem>
                  <Divider />
                  <ListItem><b>OD Height</b>: {String(x.odHeight)}</ListItem>
                  <Divider />
                  <ListItem><b>OD Weight</b>: {String(x.odWeight)}</ListItem>
                  <Divider />
                  <ListItem><b>OD Bump</b>: {String(x.odBump)}</ListItem>
                  <Divider />
                  <ListItem><b>Rate</b>: {String(x.rate)}</ListItem>
                </List>
              </TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
        <RaisedButton className={classes.button} label="Edit" href={'/edit'} />
        <RaisedButton className={classes.button} label="Delete" href={'#'} />
      </div>
    ));
  }

  render () {
    const {classes} = this.props

    return (
      <div>
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <RaisedButton className={classes.button} label="Add New Equipment" primary={false} href={'/edit'} />
      </MuiThemeProvider>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <div>
            {this.renderEquipment()}
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default enhancer(HomeContainer)
