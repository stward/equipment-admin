import React, { Component } from 'react'

const equipment = [
  {name: 'Double Drop Trailer', maxLength: 100},
  {name: 'Dry Van Trailer', maxLength: 50},
  {name: 'Extendable Trailer', maxLength: 200},
  {name: 'Flatbed LTL', maxLength: 90}
]

class HomeContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {}
  }

  renderEquipment() {
    return equipment.map((x) => (
      <tr>
        <td>{x.name}</td>
        <td>{x.maxLength}</td>
      </tr>
    ));
  }

  render () {
    return (
      <div>
        <table>
          <tr>
            <td>Name</td>
            <td>Max. Length</td>
          </tr>
          {this.renderEquipment()}
        </table>
      </div>
    )
  }
}

export default HomeContainer
