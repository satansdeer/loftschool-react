import React, { Component } from 'react';

const {
  Consumer: ThemeConsumer,
  Provider: ThemeProvider,
} = React.createContext('');

export class ContextApiProvider extends Component {
  state = { theme: 'light' };

  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === 'light' ? 'dark' : 'light',
    }));
  }

  render() {
    const { theme, children } = this.state;
    return (
      <ThemeProvider
        value={{ theme, toggleTheme: this.toggleTheme }}
      >
        <IntermediateComponent>
          {({ value }) => <p>{value}</p>}
        </IntermediateComponent>
        {children}
      </ThemeProvider>
    );
  }
}

const IntermediateComponent = ({ children }) => (
  <div>
    {children({
      value: 'Hello from IntermediateComponent',
    })}
    <Button />
  </div>
);

const Button = () => (
  <ThemeConsumer>
    {({ theme, toggleTheme }) => (
      <button
        onClick={toggleTheme}
        style={{
          backgroundColor:
            theme === 'light' ? '#666' : '#eee',
        }}
      >
        Кнопка с темой
      </button>
    )}
  </ThemeConsumer>
);

export default ContextApiProvider;
