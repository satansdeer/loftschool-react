import React, { PureComponent } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getRequest, getIsSearching, getResult } from './ducks/search';


class App extends PureComponent {
  state = {
    searchInput: '',
  };

  changeSearchInput = event => {
    const { getRequest } = this.props;
    this.setState({ searchInput: event.target.value });

    getRequest(event.target.value);
  };

  search = () => {
    const { getRequest } = this.props;
    const { searchInput } = this.state;

    getRequest(searchInput);
  };

  render() {
    const { searchInput } = this.state;
    const { result, isSearching } = this.props;
    return (
      <div>
        <input value={searchInput} onChange={this.changeSearchInput} />
        <button onClick={this.search}>Искать</button>

        <div>
          {isSearching && <p>Выполняетя поиск...</p>}
          {result && <p>{result}</p>}
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    result: getResult(state),
    isSearching: getIsSearching(state),
  }),
  { getRequest },
)(App);
