import React from "react";
import LogIn from "../components/LogIn";
import SignUp from "../components/SignUp";
import { Divider, Grid } from "semantic-ui-react";

function LogInContainer(props) {
  const { signUpUser, logInUser } = props;

  return (
    <div className="log-in-div">
      <h1 className="log-in-header">
        The Bestiary
      </h1>
      <div className="ui segment log-in-container">
        <Grid columns={2} relaxed="very">
          <Grid.Column>
            <LogIn logInUser={logInUser} />
          </Grid.Column>

          <Grid.Column>
            <SignUp signUpUser={signUpUser} />
          </Grid.Column>
        </Grid>
        <Divider vertical>Or</Divider>
      </div>
    </div>
  );
}

export default LogInContainer;
