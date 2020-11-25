import React from "react";
import Monster from "../components/Monster";
import { formatEXP } from "../components/MonsterTable";
import { Button, Divider } from "semantic-ui-react";

function EncountersContainer(props) {
  let { user, editEncounter, deleteEncounter } = props;

  return (
    <div>
      <h1>{user.username}'s Encounters</h1>
      {user.encounters.map((encounter) => {
        return (
          <>
            <div className="user-encounter-container">
              <h2 className="user-encounter-title">{encounter.name}</h2>
              <div className="user-encounter-info">
                {encounter.monsters.map((mon) => {
                  return (
                    <div className="user-monster-info">
                      <Monster monster={mon} />
                      <span>CR: {mon.challenge_rating}</span>{" "}
                      <span>EXP: {formatEXP(mon.exp)}</span>
                      <br />
                    </div>
                  );
                })}
              </div>
              <div className="user-encounter-actions">
                <Divider />
                <Button onClick={() => editEncounter(encounter)} primary>Edit Encounter</Button>
                <Button onClick={() => deleteEncounter(encounter)} negative>Delete Encounter</Button>
              </div>
            </div>
            <br />
            <Divider />
          </>
        );
      })}
    </div>
  );
}

export default EncountersContainer;
