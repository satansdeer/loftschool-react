import React, { Component } from 'react';

const {
  Consumer: ThemeConsumer,
  Provider: ThemeProvider,
} = React.createContext('');

export class ContextApiProviderExample extends Component {
  state = { theme: 'light' };

  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === 'light' ? 'dark' : 'light',
    }));
  };

  render() {
    const { theme } = this.state;
    return (
      <ThemeProvider
        value={{ theme, toggleTheme: this.toggleTheme }}
      >
        <Button />
      </ThemeProvider>
    );
  }
}

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

export default ContextApiProviderExample;
