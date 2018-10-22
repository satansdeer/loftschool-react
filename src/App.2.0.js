import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: hsla(0, 0%, ${props => props.counter % 100}%, 1);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PageTitle = styled.h3`
  color: white;
  margin: 0;
`;

class App2 extends PureComponent {
  state = {
    counter: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState(state => ({ counter: state.counter + 10 }));
    }, 600);
  }
  render() {
    const {counter} = this.state
    return (
      <Container counter={counter}>
        <PageTitle>Page with styled-components</PageTitle>
      </Container>
    );
  }
}

export default App2;
