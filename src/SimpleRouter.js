import React, { Component } from 'react';
import './App.css';
import { Route, Link, withRouter } from 'react-router-dom';

let Home = props => {
  console.log(props);
  return (
    <>
      <Link to="/about">About</Link>
      <div>Home</div>
    </>
  );
};

Home = withRouter(Home);

const About = props => {
  console.log(props);
  return <div>About</div>;
};

const Topics = props => {
  console.log(props);
  return <div>Topics</div>;
};

class SimpleRouter extends Component {
  state = {
    userName: 'Artem',
  };

  render() {
    const { userName } = this.state;
    return (
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/topics">Topics</Link>

        <hr />
        <Route path="/" component={Home} exact />
        <Route path="/home/:id" component={Home} />
        <Route path="/about*" component={About} />
        <Route
          path="/topics"
          render={props => (
            <Topics {...props} userName={userName} />
          )}
        />
      </div>
    );
  }
}

export default SimpleRouter;
