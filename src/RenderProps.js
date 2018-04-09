import React, { PureComponent } from 'react';

class WithWindowSize extends PureComponent {
  state = {
    width: window.innerWidth,
  };

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    return this.props.render({ width });
  }
}

export default () => (
  <div>
    <h1>Пример с renderProps</h1>
    <WithWindowSize
      render={({ width }) => (
        <p style={{ color: 'red' }}>{width}</p>
      )}
    />
  </div>
);
