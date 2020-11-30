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
    isEdit: false,
    editId: null
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
  deleteMonFromEncounter = (monster) => {
    this.setState({
      chosenMonsters: [...this.state.chosenMonsters.filter( mon => mon.id !== monster.id)]
    })
  }
  // updates state with user's encounter info
  editEncounter = (encounter) => {
    this.setState({
      view: "home",
      encounterName: encounter.name,
      chosenMonsters: [...this.state.chosenMonsters, ...encounter.monsters],
      isEdit: true,
      editId: encounter.id
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
  // sends DELETE request and returns user to update state
  deleteEncounter = (encounter) => {
    fetch(`http://localhost:3000/api/v1/encounters/${encounter.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((user) => this.props.updateUser(user));
  };
  // sends PATCH request and returns user to update state
  patchEncounter = () => {
    
    let encounterObj = {
      user_id: this.props.user.id,
      encounter: {
        name: this.state.encounterName,
        monsters: this.state.chosenMonsters.map((mon) => mon.id)
      },
    };
    let encounterOptions = {
      method: "PATCH",
      headers:{
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(encounterObj)
    }
    console.log('encounterObj', encounterObj)

    fetch(`http://localhost:3000/api/v1/encounters/${this.state.editId}`, encounterOptions)
    .then(res => res.json())
    .then(user => {
      console.log(user)
      this.props.updateUser(user)
    })
  }
  

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
              patchEncounter={this.patchEncounter}
              deleteMonFromEncounter={this.deleteMonFromEncounter}
              isEdit={this.state.isEdit}
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
              patchEncounter={this.patchEncounter}
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
    return (
      <div id='main-div'>
        <NavBar changeView={this.changeView} logOutUser={this.props.logOutUser} />
        <div className="main-container">
        {this.showView()}
        </div>
      </div>
      
    );
  }
}

export default MainContainer;
