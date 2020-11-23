import React from "react";
import MonstersContainer from "../containers/MonstersContainer";
import { Dropdown } from "semantic-ui-react";

const sizeOptions = [];

function MonsterSearchBar(props) {
  let { searchMonsters } = props
  return (
    <div id="search-bar-container">

      <label>
        <strong>Search</strong>
        <div className="ui search">
          <div className="ui icon input">
            <input
              className="prompt"
              onChange={(e) => searchMonsters(e.target.value)}
            />
            <i className="search icon" />
          </div>
        </div>
      </label>

    </div>
  );
}

export default MonsterSearchBar;
