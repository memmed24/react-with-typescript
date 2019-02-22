import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Users from "./components/Users";
import { Container, Grid } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Container>
        <Users />
      </Container>
    );
  }
}

export default App;
