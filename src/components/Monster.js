import React from "react";
import { Button, Modal, Icon } from "semantic-ui-react";

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
  const modalStyle = {
    background:'#FDF1DC',
    color:'black',
  }
  const modalHeader = {
    fontSize: '36px',
    background:'#FDF1DC',
    color:'black',
    borderBottom: '5px solid rgb(172, 2, 2)'
  }
  const modalFooter = {
    fontSize: '36px',
    background:'#FDF1DC',
    color:'black',
    borderStyle: 'hidden'
  }
  const modalBackground = {
    borderStyle: "ridge",
    borderWidth: "7px",
    borderColor: "orange",
    borderRadius: "5px",
    boxShadow: "10px 10px 5px black"
  }

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
        style={modalBackground}
      >
        <Modal.Header style={modalHeader} className="stat-block-header">
          {monster.name}
        </Modal.Header>
        <Modal.Content style={modalStyle}>
          <div className="stat-block">
            <div className="stat-block-info">
              <p>
                <b>Armor Class</b> {monster.armor_class}
                <br />
                <b>Hit Points</b> {monster.hit_points}({monster.hit_dice})
                <br />
                <b>Speed</b> {formatData(monster.speed)}
              </p>
            </div>
            <br/>
            <div className="stat-block-info">
              <p className="stat-block-abilities">
                STR: {monster.strength} | DEX: {monster.dexterity} | CON:{" "}
                {monster.constitution} | INT: {monster.intelligence} | WIS:{" "}
                {monster.wisdom} | CHA: {monster.charisma}
              </p>
            </div>
            <br/>
            <div className="stat-block-info">
              <p>
                <strong>
                  Damage Vulnerabilities:{" "}
                </strong>{" "}
                {monster.damage_vulnerable.length === 0
                  ? "none"
                  : formatData(monster.damage_vulnerable)}
                <br />
                <strong>
                  Damage Resistances:{" "}
                </strong>{" "}
                {monster.damage_resist.length === 0
                  ? "none"
                  : formatData(monster.damage_resist)}
                <br />
                <strong>
                  Damage Immunities:{" "}
                </strong>{" "}
                {monster.damage_immune.length === 0
                  ? "none"
                  : formatData(monster.damage_immune)}
                <br />
                <strong>Senses: </strong>{" "}
                {formatData(monster.senses)}
                <br />
                <strong>Languages: </strong>{" "}
                {monster.languages}
                <br />
                <strong>Challenge</strong>{" "}
                <strong>{monster.challenge_rating} ({xp} exp)</strong>
              </p>
            </div>
            {/* <Divider />
          Special Abilities go here
          <Divider />
          Actions go here */}
          </div>
        </Modal.Content>
        <Modal.Actions style={modalFooter}>
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
