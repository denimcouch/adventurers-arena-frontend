import React from "react";

function MainContainer(props) {
  let { user } = props;
  console.log("User in MainContainer", user);

  return (
    <div>
      <h1>Main Container</h1>
      <h3>Username: {user.username}</h3>
    </div>
  );
}

export default MainContainer;
