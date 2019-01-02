import React, { PureComponent } from 'react';
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
  state = {
    isLoading: false,
    data: [],
    error: null,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch('http://api.tvmaze.com/shows/180/episodes', { method: 'GET' })
      .then(response => response.json())
      .then(data => {
        setTimeout(() => {
          this.setState({ data, isLoading: false });
        }, 1000);
      })
      .catch(error => {
        //this.setState({ error, isLoading: false });
      });
  }

  render() {
    const { data, isLoading, error } = this.state;

    if (isLoading) return <p>Данные загружаются...</p>;
    if (error) return <p>Произошла сетевая ошибка</p>;

    return (
      <div>
        <h1>Firefly</h1>
        {data.map(ep => (
          <div key={ep.id}>
            {ep.image && <img src={ep.image.original} alt={ep.name} />}
          </div>
        ))}
      </div>
    );
  }
}

export default App;
