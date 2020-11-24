import React, { Component } from "react";
import MonstersContainer from "../containers/MonstersContainer";
import UserFormsContainer from "../containers/UserFormsContainer";

class MainContainer extends Component {

  state = {
    chosenMonsters: []
  }

  chooseMonster = (monster) => {
    this.setState({
      chosenMonsters: [...this.state.chosenMonsters, monster]
    })
  }

  render() {
    let { monsters } = this.props;

    return (
      <div className="main-container">
        <h1>Main Container</h1>
        <UserFormsContainer chosenMonsters={this.state.chosenMonsters}/>
        <MonstersContainer monsters={monsters} chooseMonster={this.chooseMonster} />
      </div>
    );
  }
}

export default MainContainer;
