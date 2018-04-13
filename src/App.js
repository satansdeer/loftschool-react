import React from 'react';
import './App.css';
import {
  addUser,
  removeAllUsers,
} from 'actionCreators/users';
import { connect } from 'react-redux';

let id = 0;

const App = props => {
  const { users, addUser, removeAllUsers } = props;

  return (
    <div>
      <button onClick={() => addUser(id++, `Alexander ${id}`)}>
        Добавить пользователя
      </button>
      <button onClick={removeAllUsers}>Удалить всех</button>
      {users.map(user => (
        <p key={user.id}>
          {`User: ${user.name}, id: ${user.id}`}
        </p>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.users,
});

// const mapDispatchToProps = dispatch => ({
//   addUser: (id, name) => dispatch(addUser(id, name)),
//   removeAllUsers: () => dispatch(removeAllUsers()),
// });

const mapDispatchToProps = {
  addUser,
  removeAllUsers,
};

// prettier-ignore
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
