import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class PortalExample extends Component {
  state = {
    isShowModal: false,
  };

  toggleModal = () => {
    this.setState(state => ({
      isShowModal: !state.isShowModal,
    }));
  };

  render() {
    const { isShowModal } = this.state;
    return (
      <div>
        <button onClick={this.toggleModal}>
          Открыть модальное окно
        </button>

        <Modal show={isShowModal}>
          <p>Я модальное окно</p>
          <button onClick={this.toggleModal}>
            Закрой меня
          </button>
        </Modal>
      </div>
    );
  }
}

class Modal extends Component {
  render() {
    const { show, children } = this.props;
    return show
      ? ReactDOM.createPortal(
          children,
          document.getElementById('portal'),
        )
      : null;
  }
}

export default PortalExample;
