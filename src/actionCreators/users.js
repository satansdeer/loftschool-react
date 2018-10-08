export const ADD_USER = 'ADD_USER';
export const REMOVE_ALL_USERS = 'REMOVE_ALL_USERS';

export const addUser = (id, name) => ({
  type: ADD_USER,
  payload: {
    id,
    name,
  },
});

export const removeAllUsers = () => ({
  type: REMOVE_ALL_USERS,
});
