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
import getMuiTheme          from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react'

const buttonStyle = {
  margin: 12,
  display: 'block'
};

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
      <TableRow>
        <TableRowColumn style={colStyle}><h2>{x.name}</h2></TableRowColumn>
        <TableRowColumn>
          <List>
            <ListItem>LTL: {String(x.ltl)}</ListItem>
            <ListItem>Max Length: {String(x.maxLength)}</ListItem>
            <ListItem>Max Width: {String(x.maxWidth)}</ListItem>
            <ListItem>Max Height: {String(x.maxHeight)}</ListItem>
            <ListItem>Max Weight: {String(x.maxWeight)}</ListItem>
            <ListItem>OD Length: {String(x.odLength)}</ListItem>
            <ListItem>OD Width: {String(x.odWidth)}</ListItem>
            <ListItem>OD Height: {String(x.odHeight)}</ListItem>
            <ListItem>OD Weight: {String(x.odWeight)}</ListItem>
            <ListItem>OD Bump: {String(x.odBump)}</ListItem>
            <ListItem>Rate: {String(x.rate)}</ListItem>
          </List>
        </TableRowColumn>
        <TableRowColumn style={colStyle}>
          <RaisedButton label="Edit" primary={true} style={buttonStyle} />
          <RaisedButton label="Delete" secondary={true} style={buttonStyle} />
        </TableRowColumn>
      </TableRow>
    ));
  }

  render () {
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <Table>
            <TableBody displayRowCheckbox={false}>
              <TableRow>
                <TableRowColumn><h2>Name</h2></TableRowColumn>
                <TableRowColumn><h2>Details</h2></TableRowColumn>
                <TableRowColumn><h2>Actions</h2></TableRowColumn>
              </TableRow>
              {this.renderEquipment()}
            </TableBody>
          </Table>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default HomeContainer
