import React from "react";

function MonsterSearchBar(props) {
  let {
    setSearchTerm,
    setSizeFilter,
    setTypeFilter,
    sizeOptions,
    alignmentOptions,
    crOptions,
    typeOptions,
  } = props;

  return (
    <div id="search-bar-container">
      <div className="filters">
        <label>
          <strong>Filter by Size: </strong>
          <select onChange={(e) => setSizeFilter(e.target.value)}>
            <option value="">All</option>
            {sizeOptions.map((size) => (
              <option value={size}>{size}</option>
            ))}
          </select>
        </label>
        <br />
        <label>
          <strong>Filter by Type: </strong>
          <select onChange={(e) => setTypeFilter(e.target.value)}>
            <option value="">All</option>
            {typeOptions.map((type) => (
              <option value={type}>{type}</option>
            ))}
          </select>
        </label>
        <br />
        <label>
          <strong>Filter by Alignment: </strong>
          <select onChange={(e) => console.log(e.target.value)}>
            <option value="">All</option>
            {alignmentOptions.map((align) => (
              <option value={align}>{align}</option>
            ))}
          </select>
        </label>
        <br />
        <label>
          <strong>Min CR: </strong>
          <select onChange={(e) => console.log(e.target.value)}>
            <option value="">All</option>
            {crOptions.map((cr) => (
              <option value={cr}>{cr}</option>
            ))}
          </select>
        </label>{" "}
        <label>
          <strong>Max CR: </strong>
          <select onChange={(e) => console.log(e.target.value)}>
            <option value="">All</option>
            {crOptions.map((cr) => (
              <option value={cr}>{cr}</option>
            ))}
          </select>
        </label>
      </div>

      <label>
        <strong>Search</strong>
        <div className="ui search">
          <div className="ui icon input">
            <input
              className="prompt"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i className="search icon" />
          </div>
        </div>
      </label>
    </div>
  );
}

export default MonsterSearchBar;
