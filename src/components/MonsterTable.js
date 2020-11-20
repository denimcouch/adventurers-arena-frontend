import React from "react";
import { Header, Table, Button } from "semantic-ui-react";

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
              <Table.HeaderCell>Alignment</Table.HeaderCell>
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
                  <Table.Cell singleLine>{monster.name}</Table.Cell>
                  <Table.Cell>{monster.challenge_rating}</Table.Cell>
                  <Table.Cell>{capitalizeWords(monster.mon_type)}</Table.Cell>
                  <Table.Cell>{capitalizeWords(monster.alignment)}</Table.Cell>
                  <Table.Cell>{monster.exp}</Table.Cell>
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
