import React from "react";
import LogIn from "../components/LogIn";
import SignUp from "../components/SignUp";
import { Divider, Grid, Header, Segment } from "semantic-ui-react";

function LogInContainer(props) {
  const { signUpUser, logInUser } = props;

  return (
    <div className="log-in-div">
      <Header className="app-header" as="h1" size='huge' dividing>
        Adventurer's Arena
      </Header>
      <Segment className="log-in-container">
        <Grid columns={2} relaxed="very">
          <Grid.Column>
            <LogIn logInUser={logInUser} />
          </Grid.Column>

          <Grid.Column>
            <SignUp signUpUser={signUpUser} />
          </Grid.Column>
        </Grid>
        <Divider vertical>Or</Divider>
      </Segment>
    </div>
  );
}

export default LogInContainer;
