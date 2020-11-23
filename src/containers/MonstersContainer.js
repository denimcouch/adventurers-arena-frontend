import React, { Component } from "react";
import MonsterTable from "../components/MonsterTable";
import MonsterSearchBar from "../components/MonsterSearchBar";

class MonstersContainer extends Component {
  state = {
    searchTerm: "",
    sizeFilter: "",
    typeFilter: "",
    alignFilter: "",
    minCR: 0,
    maxCR: 30,
  };

  //updating state with the following functions
  setSearchTerm = (string) => {
    this.setState({ searchTerm: string });
  };
  setSizeFilter = (sizeFilter) => {
    this.setState({
      sizeFilter,
    });
  };
  setTypeFilter = (typeFilter) => {
    this.setState({ typeFilter });
  };
  setAlignFilter = (alignFilter) => this.setState({alignFilter})
  setMinCR = (minCR) => this.setState({minCR})
  setMaxCR = (maxCR) => this.setState({maxCR})

  //uses searchTerm to find Monsters
  searchMonsters = () => {
    return this.props.monsters.filter((monster) =>
      monster.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  };

  // creates array of size categories
  sizeOptions = () => {
    let sizeArray = [];
    this.props.monsters.map((monster) => {
      return sizeArray.includes(monster.size)
        ? null
        : sizeArray.push(monster.size);
    });
    return sizeArray;
  };
  // creates array of alignment categories
  alignmentOptions = () => {
    let alignmentArray = [];
    this.props.monsters.map((monster) => {
      return alignmentArray.includes(monster.alignment)
        ? null
        : alignmentArray.push(monster.alignment);
    });
    return alignmentArray.sort((a, b) => a - b);
  };
  // creates array of challenge ratings
  crOptions = () => {
    let crArray = [];
    this.props.monsters.map((monster) => {
      return crArray.includes(monster.challenge_rating)
        ? null
        : crArray.push(monster.challenge_rating);
    });
    return crArray.sort((a, b) => a - b);
  };
  // creates array of types
  typeOptions = () => {
    let typeArray = [];
    this.props.monsters.map((monster) => {
      return typeArray.includes(monster.mon_type)
        ? null
        : typeArray.push(monster.mon_type);
    });
    return typeArray;
  };

  render() {
    let monsters = this.searchMonsters().filter(
      (monster) =>
        monster.size.includes(this.state.sizeFilter) &&
        monster.mon_type.includes(this.state.typeFilter) &&
        monster.alignment.includes(this.state.alignFilter) &&
        monster.challenge_rating >= this.state.minCR &&
        monster.challenge_rating <= this.state.maxCR
    );
    return (
      <div>
        <h2>Monsters Container</h2>
        <MonsterSearchBar
          setSearchTerm={this.setSearchTerm}
          setSizeFilter={this.setSizeFilter}
          setTypeFilter={this.setTypeFilter}
          setAlignFilter={this.setAlignFilter}
          setMinCR={this.setMinCR}
          setMaxCR={this.setMaxCR}
          sizeOptions={this.sizeOptions()}
          alignmentOptions={this.alignmentOptions()}
          crOptions={this.crOptions()}
          typeOptions={this.typeOptions()}
        />
        <MonsterTable monsters={monsters} />
      </div>
    );
  }
}

export default MonstersContainer;
