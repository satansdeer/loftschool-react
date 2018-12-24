import React, { Component } from 'react';

export class ContextApiProvider extends Component {
  state = { theme: 'light' };

  componentDidMount() {
    setInterval(this.toggleTheme, 2000);
  }

  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === 'light' ? 'dark' : 'light',
    }));
  };

  render() {
    const { theme } = this.state;
    return <Button theme={theme} />;
  }
}

const Button = ({ theme }) => (
  <button
    style={{
      backgroundColor: theme === 'light' ? '#666' : '#eee',
    }}
  >
    Кнопка с темой
  </button>
);

export default ContextApiProvider;
