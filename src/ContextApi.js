import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext('light');
export class ContextApi extends Component {
  state = { theme: 'light' };

  componentDidMount() {
    setInterval(() => {
      this.setState(state => {
        return state.theme === 'light'
          ? { theme: 'dark' }
          : { theme: 'light' };
      });
    }, 1000);
  }
  render() {
    return (
      <Provider value={this.state.theme}>
        <IntermediateComponent>
          <ThemedButton />
        </IntermediateComponent>
      </Provider>
    );
  }
}

const IntermediateComponent = ({ children }) => {
  return <div>{children}</div>;
};

function withTheme(WrappedComponent) {
  return class extends Component {
    render() {
      return (
        <Consumer>
          {theme => (
            <WrappedComponent
              {...this.props}
              theme={theme}
            />
          )}
        </Consumer>
      );
    }
  };
}

const Button = ({ theme }) => (
  <button
    style={{
      backgroundColor: theme === 'light' ? '#333' : '#eee',
    }}
  >
    Кнопка с темой
  </button>
);

const ThemedButton = withTheme(Button);

export default ContextApi;
