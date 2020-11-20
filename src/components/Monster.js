import React from "react";
import { Button, Modal, Icon, Divider } from "semantic-ui-react";

function monsterReducer(state, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return { open: true, dimmer: action.dimmer };
    case "CLOSE_MODAL":
      return { open: false };
    default:
      throw new Error();
  }
}

function Monster({ monster, xp }) {
  const [state, dispatch] = React.useReducer(monsterReducer, {
    open: false,
    dimmer: undefined,
  });
  const { open, dimmer } = state;

  const formatData = (array) => array.join(" | ");

  return (
    <div>
      <Button
        onClick={() => dispatch({ type: "OPEN_MODAL", dimmer: "blurring" })}
      >
        {monster.name}
      </Button>

      <Modal
        dimmer={dimmer}
        open={open}
        onClose={() => dispatch({ type: "CLOSE_MODAL" })}
      >
        <Modal.Header>{monster.name}</Modal.Header>
        <Modal.Content>
          <div>
            <p>
              <b>Armor Class</b> {monster.armor_class}
              <br />
              <b>Hit Points</b> {monster.hit_points}({monster.hit_dice})
              <br />
              <b>Speed</b> {formatData(monster.speed)}
            </p>
          </div>
          <Divider />
          <div>
            <p>
              STR: {monster.strength} | DEX: {monster.dexterity} | CON:{" "}
              {monster.constitution} | INT: {monster.intelligence} | WIS:{" "}
              {monster.wisdom} | CHA: {monster.charisma}
            </p>
          </div>
          <Divider />
          <div>
            <p>
              <b>Damage Vulnerabilities</b>{" "}
              {monster.damage_vulnerable.length === 0
                ? "none"
                : formatData(monster.damage_vulnerable)}
              <br />
              <b>Damage Resistances</b>{" "}
              {monster.damage_resist.length === 0
                ? "none"
                : formatData(monster.damage_resist)}
              <br />
              <b>Damage Immunities</b>{" "}
              {monster.damage_immune.length === 0
                ? "none"
                : formatData(monster.damage_immune)}
              <br />
              <b>Senses</b> {formatData(monster.senses)}
              <br />
              <b>Languages</b> {monster.languages}
              <br />
              <b>Challenge</b> {monster.challenge_rating} ({xp} exp)
            </p>
          </div>
          <Divider />
          Special Abilities go here
          <Divider />
          Actions go here
        </Modal.Content>
        <Modal.Actions>
          <Button
            icon
            negative
            onClick={() => dispatch({ type: "CLOSE_MODAL" })}
          >
            <Icon name="close" />
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default Monster;
