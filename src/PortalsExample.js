import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class PortalsExample extends Component {
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

        {isShowModal && (
          <Modal show={isShowModal}>
            <p>Я модальное окно</p>
            <button onClick={this.toggleModal}>
              Закрой меня
            </button>
          </Modal>
        )}
      </div>
    );
  }
}

class Modal extends Component {
  constructor(props) {
    super(props);
    this.id = 'modalPortal';
    this.div = document.createElement('div');
    this.div.id = this.id;

    document.body.insertAdjacentElement(
      'beforeend',
      this.div,
    );
  }

  componentWillUnmount() {
    this.div.parentNode.removeChild(this.div);
  }

  render() {
    const { show, children } = this.props;
    return show
      ? ReactDOM.createPortal(
          children,
          document.getElementById(this.id),
        )
      : null;
  }
}

export default PortalsExample;
