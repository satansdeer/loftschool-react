import React, { Component } from 'react';

export class ContextApiProvider extends Component {
  state = { theme: 'light' };

  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === 'light' ? 'dark' : 'light',
    }));
  };

  render() {
    const { theme, children } = this.state;
    return (
      <IntermediateComponent>
        {({ value }) => <p>{value}</p>}
      </IntermediateComponent>
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
  <button
    style={{
      backgroundColor: '#666',
    }}
  >
    Кнопка с темой
  </button>
);

export default ContextApiProvider;
