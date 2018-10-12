import React, { Component } from 'react';
import './Xkcd.css';
import { connect } from 'react-redux';
import { getContent, getIsLoading, getError } from './modules/xkcd';

class Xkcd extends Component {
  render() {
    const { error, isLoading, content: xkcd } = this.props;
    if (xkcd == null) return <p>No data</p>
    if (error != null) return <p>{error}</p>;

    return (
      <div className="xkcd">
        <div className="xkcd__content">
          {isLoading ? (
            <p>Загрузка</p>
          ) : (
            <React.Fragment>
              <img className="xkcd-image" src={xkcd.img} alt={xkcd.alt} />
              <p className="xkcd-description">{xkcd.transcript}</p>
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

export default connect(mapStateToProps)(Xkcd);
