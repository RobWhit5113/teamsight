import { fetch } from './csrf.js';

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const removeUser = () => ({
  type: REMOVE_USER
});

export const login = ({ credential, password }) => async (dispatch) => {
  const res = await fetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({ credential, password })
  });
  if(res.data.user){
  dispatch(setUser(res.data.user));
  return res;
  }else if (res.data.coach){
    dispatch(setUser(res.data.coach));
    return res;
  }
};


export const restoreUser = () => async (dispatch) => {
  const res = await fetch('/api/session');
  dispatch(setUser(res.data.user));
  return res;
};

export const signup = (user) => async (dispatch) => {
  console.log(user)
  const { username, email, password, firstName, lastName, isCoach, teamId  } = user;
  const response = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({
      username, email, password, firstName, lastName, isCoach, teamId
    })
  });

  dispatch(setUser(response.data.user));
  return response;
};

// export const coachSignup = (coach) => async(dispatch) => {
//   const res = await fetch('/api/coaches', {
//     method: 'POST',
//     body: JSON.stringify(coach)
//   })
//   if(res.ok){
//     dispatch(setUser(res.data.coach))
//     return res
//   }
// }

export const logout = () => async (dispatch) => {
  const response = await fetch('/api/session', {
    method: 'DELETE'
  });
  dispatch(removeUser());
  return response;
};

const initialState = { user: null };

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state, { user: action.payload });
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state, { user: null });
      return newState;
    default:
      return state;
  }
}

export default reducer;
