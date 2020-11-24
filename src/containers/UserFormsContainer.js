import React, { Component } from "react";
import PartyForm from "../components/PartyForm";
import EncounterForm from "../components/EncounterForm";

class UserFormsContainer extends Component {
  constructor() {
    super();

    this.state = {
      partySize: 4,
      level: 1,
    };
  }

  setPartySize = (partySize) =>
    this.setState({ partySize: parseInt(partySize, 10) });
  setLevel = (level) => this.setState({ level: parseInt(level, 10) });

  expThreshold = [
    {
      level: 1,
      exp: [25, 50, 75, 100],
    },
    {
      level: 2,
      exp: [50, 100, 150, 200],
    },
    {
      level: 3,
      exp: [75, 150, 225, 400],
    },
    {
      level: 4,
      exp: [125, 250, 375, 500],
    },
    {
      level: 5,
      exp: [250, 500, 750, 1100],
    },
    {
      level: 6,
      exp: [300, 600, 900, 1400],
    },
    {
      level: 7,
      exp: [350, 750, 1100, 1700],
    },
    {
      level: 8,
      exp: [450, 900, 1400, 2100],
    },
    {
      level: 9,
      exp: [550, 1100, 1600, 2400],
    },
    {
      level: 10,
      exp: [600, 1200, 1900, 2800],
    },
    {
      level: 11,
      exp: [800, 1600, 2400, 3600],
    },
    {
      level: 12,
      exp: [1000, 2000, 3000, 4500],
    },
    {
      level: 13,
      exp: [1100, 2200, 3400, 5100],
    },
    {
      level: 14,
      exp: [1250, 2500, 3800, 5700],
    },
    {
      level: 15,
      exp: [1400, 2800, 4300, 6400],
    },
    {
      level: 16,
      exp: [1600, 3200, 4800, 7200],
    },
    {
      level: 17,
      exp: [2000, 3900, 5900, 8800],
    },
    {
      level: 18,
      exp: [2100, 4200, 6300, 9500],
    },
    {
      level: 19,
      exp: [2400, 4900, 7300, 10900],
    },
    {
      level: 20,
      exp: [2800, 5700, 8500, 12700],
    },
  ];

  partyEXP = (partySize, level) => {
    const levelObj = this.expThreshold.find((el) => el.level === level);
    return levelObj.exp.map((num) => num * partySize);
  };

  render() {
    // console.log('Return value of partyEXP', this.partyEXP(this.state.partySize, this.state.level))
    return (
      <div className="user-forms-container">
        <PartyForm
          setPartySize={this.setPartySize}
          setLevel={this.setLevel}
          partyEXP={this.partyEXP(this.state.partySize, this.state.level)}
        />
        <EncounterForm
          chosenMonsters={this.props.chosenMonsters}
          nameEncounter={this.props.nameEncounter}
          resetEncounter={this.props.resetEncounter}
          partyEXP={this.partyEXP(this.state.partySize, this.state.level)}
        />
      </div>
    );
  }
}
export default UserFormsContainer;
