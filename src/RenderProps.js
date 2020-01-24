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
    const { children } = this.props;
    return children(width);
  }
}

const RenderPropsExample = () => (
  <WithWindowSize>
    {width => <pre>windowWidth: {width}</pre>}
  </WithWindowSize>
);

export default RenderPropsExample;
