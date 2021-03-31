import { fetch } from './csrf.js';

const SET_TEAM = 'team/setTeam'


const setTeam = (team) => ({
  type: SET_TEAM,
  payload: team
})

export const teamSignup = (teamData) => async(dispatch) => {
  
  const res = await fetch('/api/team', {
    method: 'POST',
    body: JSON.stringify(teamData)
  });
  
  if (res.ok){
    // const data = await response.json()
    dispatch(setTeam(res.data.team))
    return res
  }
}

const teamReducer = (state={}, action ) => {
  let newState
  switch(action.type){
    case SET_TEAM:
      newState = {}
      newState[action.payload.id] = action.payload
      return newState
    default:
      return state
  }
}

export default teamReducer