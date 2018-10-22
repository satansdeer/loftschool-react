import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import cssModuleNames from './App.module.scss';
import Transition from 'react-transition-group/Transition';
import cx from 'classnames';
import bcx from 'bem-classnames';
import styled from 'styled-components';

const duration = 1000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0 },
};

class Button extends Component {
  buttonClass = {
    name: 'c-button',
    modifiers: ['color', 'block'],
    states: ['disabled'],
  };

  render() {
    const { children, color, block, disabled, ...rest } = this.props;
    return (
      <button
        className={bcx(this.buttonClass, { disabled, color, block })}
        {...rest}
      >
        {children}
      </button>
    );
  }
}

class App extends Component {
  state = {
    counter: 0,
    inState: false,
  };

  handleClick = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
  };

  componentDidMount() {
    this.setState({ inState: true });
  }

  componentWillUnmount() {
    this.setState({ inState: false });
  }

  render() {
    const { counter, inState } = this.state;
    console.log(cssModuleNames);
    return (
      <div className="App">
        <Transition in={inState} timeout={duration}>
          {state => (
            <header
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
              className={cx('App-header', cssModuleNames.root)}
            >
              <img src={logo} className="App-logo" alt="logo" />
              <p className={cssModuleNames.black}>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <A
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </A>
              <p
                className={cx('t-counter', {
                  [cssModuleNames.root]: counter % 2,
                })}
              >
                {counter}
              </p>
              <Button
                color={counter % 2 ? 'green' : ''}
                onClick={this.handleClick}
              >
                +
              </Button>
            </header>
          )}
        </Transition>
      </div>
    );
  }
}

const A = styled.a`
  text-decoration-color: yellow;
`

export default App;
