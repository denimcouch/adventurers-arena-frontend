import React, { Component } from "react";
import MonsterTable from '../components/MonsterTable'

class MonstersContainer extends Component {
  state = {
    filterBySize: "",
    filterByType: "",
    minCR: "",
    maxCR: "",
  };

  render() {
    return (
      <div>
        <h2>Monsters Container</h2>
        <MonsterTable monsters={this.props.monsters} />
      </div>
    );
  }
}

export default MonstersContainer;
