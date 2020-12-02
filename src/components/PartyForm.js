import React, { Component } from "react";
import {formatEXP} from '../components/MonsterTable'


const partySize = [1, 2, 3, 4, 5, 6, 7, 8];
const levels = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
];

class PartyForm extends Component {
  render() {
    let partyEXP = this.props.partyEXP;
    return (
      <div className="ui segment party-form-container">
        <h2>Party Info</h2>
        <div>
          <label>
            <strong>Party Size: </strong>
            <select onChange={(e) => this.props.setPartySize(e.target.value)}>
              {partySize.map((index) => {
                return index === 4 ? (
                  <option selected value={index}>
                    {index}
                  </option>
                ) : (
                  <option value={index}>{index}</option>
                );
              })}
            </select>
          </label>{" "}
          <label>
            <strong>Level: </strong>
            <select onChange={(e) => this.props.setLevel(e.target.value)}>
              {levels.map((index) => {
                return index === 1 ? (
                  <option selected value={index}>
                    {index}
                  </option>
                ) : (
                  <option value={index}>{index}</option>
                );
              })}
            </select>
          </label>
        </div>
        <div>
          <ul className="difficulty-level-list">
            <li>
              <span>Easy: </span>
              <span>{formatEXP(partyEXP[0])} exp</span>
            </li>
            <li>
              <span>Medium: </span>
              <span>{formatEXP(partyEXP[1])} exp</span>
            </li>
            <li>
              <span>Hard: </span>
              <span>{formatEXP(partyEXP[2])} exp</span>
            </li>
            <li>
              <span>Deadly: </span>
              <span>{formatEXP(partyEXP[3])} exp</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PartyForm;
