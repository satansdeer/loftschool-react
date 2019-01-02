import React, { PureComponent } from 'react';
import { getSeriesRequest } from './modules/series/actions';
import { getSeries, getIsLoading, getError } from './modules/series/reducer';
import { connect } from 'react-redux';
import './App.css';

// 0. idle
// 1. request
// 2. loading
// 3. success
// 3. failure

// GET_SERIES_REQUEST
//  isLoading: true

// GET_SERIES_SUCCESS
//  isLoading: false
//  series: from fetch

// GET_SERIES_FAILURE
//   isLoading: false
//   error: from fetch

class App extends PureComponent {
  componentDidMount() {
    const { getSeriesRequest } = this.props;
    getSeriesRequest();
  }

  render() {
    const { series, isLoading, error } = this.props;
    console.log(series);

    if (isLoading) return <p>Данные загружаются...</p>;
    if (error) return <p>Произошла сетевая ошибка</p>;
    return (
      <div>
        <h1>Firefly</h1>
        {series.map(ep => (
          <div key={ep.id}>
            {ep.image && <img src={ep.image} alt={ep.name} />}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  series: getSeries(state),
  isLoading: getIsLoading(state),
  error: getError(state),
});
const mapDispatchToProps = { getSeriesRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
