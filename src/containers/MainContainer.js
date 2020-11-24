import React from "react";
import MonstersContainer from '../containers/MonstersContainer'
import UserFormsContainer from '../containers/UserFormsContainer'

function MainContainer(props) {
  let { user, monsters } = props;

  return (
    <div className="main-container" >
      <h1>Main Container</h1>
      <UserFormsContainer />
      <MonstersContainer monsters={monsters} />
    </div>
  );
}

export default MainContainer;
