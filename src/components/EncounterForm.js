import React from "react";
import SaveEncounterButton from "./SaveEncounterButton";
import { Segment, Header, Button, Icon } from "semantic-ui-react";
import { formatEXP } from "../components/MonsterTable";

function EncounterForm(props) {
  let {
    chosenMonsters,
    nameEncounter,
    resetEncounter,
    saveEncounter,
    patchEncounter,
    deleteMonFromEncounter,
    partyEXP,
    isEdit,
  } = props;

  const calculateTotalEXP = (monsters) => {
    let pooledEXP = monsters.map((monster) => monster.exp);
    return pooledEXP.length !== 0 ? pooledEXP.reduce((a, b) => a + b) : 0;
  };
  const calculateAdjustedEXP = (monsters) => {
    let totalEXP = calculateTotalEXP(monsters);
    let length = monsters.length;
    if (length === 1) {
      return totalEXP * 1;
    } else if (length === 2) {
      return totalEXP * 1.5;
    } else if (length >= 3 && length <= 6) {
      return totalEXP * 2;
    } else if (length >= 7 && length <= 10) {
      return totalEXP * 2.5;
    } else if (length >= 11 && length <= 14) {
      return totalEXP * 3;
    } else if (length >= 15) {
      return totalEXP * 4;
    } else {
      return totalEXP;
    }
  };
  const calculateDifficulty = (monsters) => {
    let adjustedEXP = calculateAdjustedEXP(monsters);
    if (adjustedEXP < partyEXP[1]) {
      return "Easy";
    } else if (adjustedEXP >= partyEXP[1] && adjustedEXP < partyEXP[2]) {
      return "Medium";
    } else if (adjustedEXP >= partyEXP[2] && adjustedEXP < partyEXP[3]) {
      return "Hard";
    } else {
      return "Deadly";
    }
  };

  function currentEncounter(monster) {
    return (
      <div className='encounter-monster'>
        <h4 className='encounter-monster-header'>{monster.name}</h4>
        <span className='encounter-monster-info'>CR: {monster.challenge_rating}</span>{" "}
        <span className='encounter-monster-info'>EXP: {formatEXP(monster.exp)}</span>
        <Button className='delete-btn' size='tiny' onClick={() => deleteMonFromEncounter(monster)} icon negative>
          <Icon name='delete'/>
        </Button>
      </div>
    );
  }

  return (
    <Segment.Group className="current-encounter-cont">
      <Segment>
        <h2>Encounter Info</h2>
      </Segment>
      <Segment>
        <div className="current-encounter-monsters">
          {chosenMonsters.map((mon) => currentEncounter(mon))}
        </div>
      </Segment>
      <Segment id='encounter-info-cont' horizontal>
        <div className='encounter-info'>
          Total EXP: {formatEXP(calculateTotalEXP(chosenMonsters))}
        </div>
        <div className='encounter-info'>
          Adjusted EXP: {formatEXP(calculateAdjustedEXP(chosenMonsters))}
        </div>
        <div className='encounter-info'>Difficulty: {calculateDifficulty(chosenMonsters)}</div>
      </Segment>
      <Segment>
        <SaveEncounterButton
          nameEncounter={nameEncounter}
          saveEncounter={saveEncounter}
        />
        <Button onClick={() => resetEncounter()} negative>
          Reset Encounter
        </Button>
        {isEdit ? (
          <Button onClick={() => patchEncounter()} primary>
            Save Edit
          </Button>
        ) : null}
      </Segment>
    </Segment.Group>
  );
}

export default EncounterForm;
