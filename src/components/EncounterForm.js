import React from "react";
import { Divider } from "semantic-ui-react";
import { formatEXP } from "../components/MonsterTable";

function currentEncounter(monster) {
  return (
    <div className="current-encounter-row">
      <div className="current-encounter monster-info">
        <span>{monster.name}</span>
        <div>
          <span class="current-encounter monster-cr">
            CR: {monster.challenge_rating}
          </span>{" "}
          <span class="current-encounter monster-cr">
            EXP: {formatEXP(monster.exp)}
          </span>
        </div>
        <div className="current-encounter monster-qty-col"></div>
      </div>
    </div>
  );
}

function EncounterForm(props) {
  let { chosenMonsters } = props;

  const calculateTotalEXP = (monsters) => {
    let pooledEXP = monsters.map((monster) => monster.exp);
    return pooledEXP.length !== 0 ? pooledEXP.reduce((a, b) => a + b) : 0;
  };
  const calculateAdjustedEXP = (monsters) => {
    let totalEXP = calculateTotalEXP(monsters);
    let length = monsters.length
    // debugger
    if (length === 1){
        return totalEXP * 1
    }else if (length === 2){
        return totalEXP * 1.5
    }else if (length >= 3 && length <= 6){
        return totalEXP * 2
    }else if (length >= 7 && length <= 10){
        return totalEXP * 2.5
    }else if (length >= 11 && length <= 14){
        return totalEXP * 3
    }else if (length >= 15){
        return totalEXP * 4
    }else {
        return totalEXP
    }
  };

    console.log('exp total', calculateAdjustedEXP(chosenMonsters), chosenMonsters.length)

  return (
    <div className="current-encounter">
      <h1>Encounter Info</h1>
      <div className="current-encounter-body">
        <div className="current-encounter-table">
          {chosenMonsters.map((mon) => {
            return currentEncounter(mon);
          })}
        </div>
        <div className="current-encounter-footer">
          <Divider />
          <span className="current-encounter-footer total-exp">
            Total EXP: {formatEXP(calculateTotalEXP(chosenMonsters))}{" "}
          </span><br/>
          <span className="current-encounter-footer adjusted-exp">
            Adjusted EXP: {formatEXP(calculateAdjustedEXP(chosenMonsters))}{" "}
          </span>
        </div>
        <button className="ui button positive">Save Encounter</button>
      </div>
    </div>
  );
}

export default EncounterForm;
