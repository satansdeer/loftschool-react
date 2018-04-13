import { ADD_USER, REMOVE_ALL_USERS } from 'types/users';

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
