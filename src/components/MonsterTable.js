import React from "react";
import { Header, Table, Button } from "semantic-ui-react";
import Monster from './Monster'

export function formatEXP(number) {
  let numString = number.toString()
  
  switch(numString.length){
      case 4:
          return numString.slice(0,1) + ',' + numString.slice(1);
      case 5:
          return numString.slice(0,2) + ',' + numString.slice(2);
      case 6:
          return numString.slice(0,3) + ',' + numString.slice(3);
      default:
          return numString
  }
}

function MonsterTable(props) {
  let { monsters } = props;

  function capitalizeWords(string) {
    const array = string.split(" ");
    return array
      .map((string) => string.charAt(0).toUpperCase() + string.slice(1))
      .join(" ");
  }

  

  return (
    <div className="monster-table-container">
      <Header as="h2">Monsters</Header>
      <div className="monster-table">
        <Table celled collapsing padded selectable striped>
          <Table.Header className="monster-table-header">
            <Table.Row>
              <Table.HeaderCell singleLine>Add</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>CR</Table.HeaderCell>
              <Table.HeaderCell>Type</Table.HeaderCell>
              <Table.HeaderCell>Experience</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body className="monster-table-body">
            {monsters.map((monster) => {
              return (
                <Table.Row key={monster.id}>
                  <Table.Cell>
                    <Button size="medium" color="green">
                      +
                    </Button>{" "}
                  </Table.Cell>
                  <Table.Cell singleLine>{<Monster monster={monster} xp={formatEXP(monster.exp)} />}</Table.Cell>
                  <Table.Cell>{monster.challenge_rating}</Table.Cell>
                  <Table.Cell>{capitalizeWords(monster.mon_type)}</Table.Cell>
                  <Table.Cell>{formatEXP(monster.exp)}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}

export default MonsterTable;
