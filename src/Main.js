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
import React, { Component } from 'react'

const buttonStyle = {
  margin: 12,
  display: 'block',
  backgroundColor: 'green'
};

const tableItemStyle = {
  border: 'black solid 5px'
}

const colStyle = {
  verticalAlign: 'top',
}

class HomeContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {}
  }

  renderEquipment() {
    return allEquipment.map((x) => (
      <TableRow style={tableItemStyle}>
        <TableRowColumn style={colStyle}><h2>{x.name}</h2></TableRowColumn>
        <TableRowColumn>
          <List>
            <ListItem>LTL: {String(x.ltl)}</ListItem>
            <Divider />
            <ListItem>Max Length: {String(x.maxLength)}</ListItem>
            <Divider />
            <ListItem>Max Width: {String(x.maxWidth)}</ListItem>
            <Divider />
            <ListItem>Max Height: {String(x.maxHeight)}</ListItem>
            <Divider />
            <ListItem>Max Weight: {String(x.maxWeight)}</ListItem>
            <Divider />
            <ListItem>OD Length: {String(x.odLength)}</ListItem>
            <Divider />
            <ListItem>OD Width: {String(x.odWidth)}</ListItem>
            <Divider />
            <ListItem>OD Height: {String(x.odHeight)}</ListItem>
            <Divider />
            <ListItem>OD Weight: {String(x.odWeight)}</ListItem>
            <Divider />
            <ListItem>OD Bump: {String(x.odBump)}</ListItem>
            <Divider />
            <ListItem>Rate: {String(x.rate)}</ListItem>
          </List>
        </TableRowColumn>
        <TableRowColumn style={colStyle}>
          <RaisedButton className="button" label="Edit" primary={true} style={buttonStyle} href={'/edit'} />
          <RaisedButton className="button" label="Delete" secondary={true} style={buttonStyle} />
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
              {this.renderEquipment()}
            </TableBody>
          </Table>
        </MuiThemeProvider>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <RaisedButton label="Create" primary={false} style={buttonStyle} />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default HomeContainer
