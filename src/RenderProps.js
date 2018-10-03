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
    const { render } = this.props;
    return render(width);
  }
}

const RenderPropsExample = () => (
  <WithWindowSize
    render={width => <pre>windowWidth: {width}</pre>}
  />
);

export default RenderPropsExample;
