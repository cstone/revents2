import React, {Component, Fragment} from 'react';
import EventDashboardComponent from "./components/EventDashboard/EventDashboard.component";
import NavBarComponent from "./components/NavBar/NavBar.component";
import {Container} from "semantic-ui-react";

class App extends Component {
  render() {
    return (
        <Fragment>
          <NavBarComponent/>
          <Container className="main">
              <EventDashboardComponent/>
          </Container>
        </Fragment>
    )
  }
}



export default App;
