import React, { Component } from "react";
import EncounterForm from "../components/EncounterForm";
import NavBar from "../components/NavBar";
import MonstersContainer from "../containers/MonstersContainer";
import UserFormsContainer from "../containers/UserFormsContainer";
import EncountersContainer from "./EncountersContainer";

class MainContainer extends Component {
  state = {
    view: "home",
    encounterName: "",
    chosenMonsters: [],
  };

  // these functions update state
  changeView = (pageName) => {
    this.setState({
      view: pageName,
    });
  };
  chooseMonster = (monster) => {
    this.setState({
      chosenMonsters: [...this.state.chosenMonsters, monster],
    });
  };
  resetEncounter = () => {
    this.setState({
      chosenMonsters: [],
    });
  };
  nameEncounter = (name) => {
    this.setState({
      encounterName: name,
    });
  };
  // sends POST request with encounter info
  saveEncounter = () => {
    let encounterObj = {
      user_id: this.props.user.id,
      encounter: {
        name: this.state.encounterName,
        monsters: this.state.chosenMonsters.map((mon) => mon.id),
      },
    };
    let encounterOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "applicaiton/json",
      },
      body: JSON.stringify(encounterObj),
    };
    fetch("http://localhost:3000/api/v1/encounters", encounterOptions)
      .then((res) => res.json())
      .then((user) => this.props.updateUser(user));
  };

  deleteEncounter = (encounter) => {
    fetch(`http://localhost:3000/api/v1/encounters/${encounter.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((user) => this.props.updateUser(user));
  };

  editEncounter = (encounter) => {
    this.setState({
      view: "home",
      encounterName: encounter.name,
      chosenMonsters: [...this.state.chosenMonsters, ...encounter.monsters],
    });
  };

  showView = () => {
    switch (this.state.view) {
      case "home":
        return (
          <>
            <UserFormsContainer
              chosenMonsters={this.state.chosenMonsters}
              nameEncounter={this.nameEncounter}
              resetEncounter={this.resetEncounter}
              saveEncounter={this.saveEncounter}
            />
            <MonstersContainer
              monsters={this.props.monsters}
              chooseMonster={this.chooseMonster}
            />
          </>
        );
      case "manage encounters":
        return (
          <>
            <EncountersContainer
              user={this.props.user}
              editEncounter={this.editEncounter}
              deleteEncounter={this.deleteEncounter}
            />
          </>
        );
      default:
        return (
          <>
            <UserFormsContainer
              chosenMonsters={this.state.chosenMonsters}
              nameEncounter={this.nameEncounter}
              resetEncounter={this.resetEncounter}
              saveEncounter={this.saveEncounter}
            />
            <MonstersContainer
              monsters={this.props.monsters}
              chooseMonster={this.chooseMonster}
            />
          </>
        );
    }
  };

  render() {
    let { monsters } = this.props;

    return (
      <div className="main-container">
        <NavBar changeView={this.changeView} />
        {this.showView()}
        {/* <UserFormsContainer chosenMonsters={this.state.chosenMonsters} nameEncounter={this.nameEncounter} resetEncounter={this.resetEncounter} saveEncounter={this.saveEncounter} />
        <MonstersContainer monsters={monsters} chooseMonster={this.chooseMonster} /> */}
      </div>
    );
  }
}

export default MainContainer;
