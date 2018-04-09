import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class PortalExample extends Component {
  state = {
    isShowModal: true,
  };

  toggleModal = () => {
    this.setState(state => ({
      isShowModal: !state.isShowModal,
    }));
  };

  showEvent = event => {
    console.log(event.nativeEvent);
  };

  render() {
    const { isShowModal } = this.state;
    return (
      <div onClick={this.showEvent}>
        <button onClick={this.toggleModal}>
          Открыть модальное окно
        </button>
        <Modal show={isShowModal}>
          <p>Я модальное окно</p>
          <button>Закрой меня</button>
        </Modal>
      </div>
    );
  }
}

const Modal = ({ show, children }) =>
  show
    ? ReactDOM.createPortal(
        children,
        document.getElementById('portal'),
      )
    : null;

export default PortalExample;
