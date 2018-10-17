import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

class AppWithRouting extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/some-path" render={() => <p>i found you</p>} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default AppWithRouting;
