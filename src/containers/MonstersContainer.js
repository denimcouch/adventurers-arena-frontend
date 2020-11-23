import React, { Component } from "react";
import MonsterTable from '../components/MonsterTable'
import MonsterSearchBar from '../components/MonsterSearchBar'

class MonstersContainer extends Component {
  state = {
    searchTerm: "",
    filterBySize: "",
    filterByType: "",
    minCR: "",
    maxCR: "",
  };

  searchMonsters = string => {
    this.setState({searchTerm: string})
  }

  render() {
    let monsters = this.props.monsters.filter( monster => monster.name.toLowerCase().includes(this.state.searchTerm.toLocaleLowerCase()))
    return (
      <div>
        <h2>Monsters Container</h2>
        <MonsterSearchBar searchMonsters={this.searchMonsters} />
        <MonsterTable monsters={monsters} />
      </div>
    );
  }
}

export default MonstersContainer;
