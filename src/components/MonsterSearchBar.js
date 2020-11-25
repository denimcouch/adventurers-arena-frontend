import React from "react";

function MonsterSearchBar(props) {
  let {
    setSearchTerm,
    setSizeFilter,
    setTypeFilter,
    setAlignFilter,
    setMinCR,
    setMaxCR,
    sizeOptions,
    alignmentOptions,
    crOptions,
    typeOptions,
  } = props;

  return (
    <div className="search-bar-container">
      <div className="filters">
        <label>
          <strong>Filter by Size: </strong>
          <select onChange={(e) => setSizeFilter(e.target.value)}>
            <option value="">All</option>
            {sizeOptions.map((size) => (
              <option value={size}>{size}</option>
            ))}
          </select>
        </label>{' '}
        
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
          <select onChange={(e) => setAlignFilter(e.target.value)}>
            <option value="">All</option>
            {alignmentOptions.map((align) => (
              <option value={align}>{align}</option>
            ))}
          </select>
        </label>
        <br />
        <label>
          <strong>Min CR: </strong>
          <select onChange={(e) => setMinCR(e.target.value)}>
            <option value="">All</option>
            {crOptions.map((cr) => (
              <option value={cr}>{cr}</option>
            ))}
          </select>
        </label>{" "}
        <label>
          <strong>Max CR: </strong>
          <select onChange={(e) => setMaxCR(e.target.value)}>
            <option value="30">All</option>
            {crOptions.map((cr) => (
              <option value={cr}>{cr}</option>
            ))}
          </select>
        </label>
      </div>
      <br/>
      <div className="search-bar">
        <label>
          <strong>Search</strong>
          <div className="ui search">
            <div className="ui icon input">
              <input
                className="prompt"
                placeholder='Ancient Red Dragon'
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <i className="search icon" />
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}

export default MonsterSearchBar;
