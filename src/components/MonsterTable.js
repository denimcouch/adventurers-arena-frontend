import React from "react";
import { Header, Table, Rating, Button } from "semantic-ui-react";

function MonsterTable(props) {
  let { monsters } = props;

  return (
    <div className="monster-Table">
      <h3>Monster Table</h3>
      <Table celled padded>
        <Table.Header className="monster-table-header">
          <Table.Row>
            <Table.HeaderCell singleLine>Add Monster</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>CR</Table.HeaderCell>
            <Table.HeaderCell>Type</Table.HeaderCell>
            <Table.HeaderCell>Alignment</Table.HeaderCell>
            <Table.HeaderCell>Experience</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        
        <Table.Body className="monster-table-body" >
          {monsters.map((monster) => {
            return (
              <Table.Row>
                <Table.Cell></Table.Cell>
                <Table.Cell singleLine>{monster.name}</Table.Cell>
                <Table.Cell>{monster.challenge_rating}</Table.Cell>
                <Table.Cell>{monster.mon_type}</Table.Cell>
                <Table.Cell>{monster.alignment}</Table.Cell>
                <Table.Cell>{monster.exp}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}

export default MonsterTable;
