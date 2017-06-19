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
import React, { Component } from 'react'

const buttonStyle = {
  margin: 12,
  display: 'block',
  className: 'buttonStyle',
  borderRadius: 20,
  border: 'solid black 1px',
  backgroundColor: '#e0e0e0'
};

const tableItemStyle = {
  border: 'black solid 5px',
  backgroundColor: '#e0e0e0',
}

const colStyle = {
  verticalAlign: 'top'
}

class HomeContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {}
  }

  renderEquipment() {
    return allEquipment.map((x) => (
      <TableRow style={tableItemStyle}>

        <TableRowColumn>
          <List>
          <TableRowColumn style={colStyle}><h2><a href={'/edit'}><FaWrench />{x.name}</a></h2></TableRowColumn>
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
            <Divider />
            <ListItem><b>OD Width</b>: {String(x.odWidth)}</ListItem>
            <Divider />
            <ListItem><b>OD Height</b>: {String(x.odHeight)}</ListItem>
            <Divider />
            <ListItem><b>OD Weight</b>: {String(x.odWeight)}</ListItem>
            <Divider />
            <ListItem><b>OD Bump</b>: {String(x.odBump)}</ListItem>
            <Divider />
            <ListItem><b>Rate</b>: {String(x.rate)}</ListItem>
            <div>
            <RaisedButton className="button" label="Edit" style={buttonStyle} href={'/edit'} />
            <RaisedButton className="button" label="Delete" style={buttonStyle} />
            </div>
          </List>
        </TableRowColumn>
      </TableRow>
    ));
  }

  render () {
    return (
      <div>
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <RaisedButton label="Add New Equipment" primary={false} style={buttonStyle} href={'/edit'} />
      </MuiThemeProvider>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <Table>
            <TableBody displayRowCheckbox={false}>
              {this.renderEquipment()}
            </TableBody>
          </Table>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default HomeContainer
