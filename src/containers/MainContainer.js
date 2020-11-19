import React from "react";

function MainContainer(props) {
  let { user } = props;

  return (
    <div>
      <h1>Main Container</h1>
      <h3>Username: {user.username}</h3>
    </div>
  );
}

export default MainContainer;
