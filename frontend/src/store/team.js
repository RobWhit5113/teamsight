import { fetch } from './csrf.js';

const SET_TEAM = 'team/setTeam'


const setTeam = (team) => ({
  type: SET_TEAM,
  payload: team
})

export const teamSignup = (teamData) => async(dispatch) => {
  const {teamName, teamLogo, location} = teamData;
  const formData = new FormData()
  formData.append("teamName", teamName);
  formData.append("location", location);

  if(teamLogo) formData.append("teamLogo", teamLogo);

  const res = await fetch('/api/team', {
    method: 'POST',
    headers: {
      "Content-Type": "multipart/form-data"
    },
    body: formData,
  });
  
  if (res.ok){
    // const data = await response.json()
    dispatch(setTeam(res.data.team))
    return res
  }
}

export const getOneTeam = (teamId) => async(dispatch) => {
  const res = await fetch(`/api/team/${teamId}`)

  if(res.ok){
    dispatch(setTeam(res.data))
  }
  return res
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