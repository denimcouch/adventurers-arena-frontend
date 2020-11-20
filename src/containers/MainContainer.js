import React from "react";
import MonstersContainer from '../containers/MonstersContainer'

function MainContainer(props) {
  let { user, monsters } = props;

  return (
    <div className="main-container" >
      <h1>Main Container</h1>
      <MonstersContainer monsters={monsters} />
    </div>
  );
}

export default MainContainer;
