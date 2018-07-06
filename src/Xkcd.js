import React, { Component } from 'react';
import './Xkcd.css';
import { connect } from 'react-redux';
import {
  getXkcdImageRequest,
  getContent,
  getIsLoading,
  getError,
} from './ducks/xkcd';

class Xkcd extends Component {
  componentDidMount() {
    this.props.getXkcdImageRequest();

    // setInterval(() => {
    //   this.props.getXkcdImageRequest();
    // }, 3000);
  }

  render() {
    const { error, isLoading, content: xkcd } = this.props;
    if (error != null) {
      return <p>{error}</p>;
    }

    return (
      <div className="xkcd">
        <div className="xkcd__content">
          {isLoading ? (
            <p>Загрузка</p>
          ) : (
            <React.Fragment>
              <img
                className="xkcd-image"
                src={xkcd.img}
                alt={xkcd.alt}
              />
              <p className="xkcd-description">
                {xkcd.transcript}
              </p>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
  content: getContent(state),
  error: getError(state),
});

const mapDispatchToProps = {
  getXkcdImageRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Xkcd);
