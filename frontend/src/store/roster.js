import { fetch } from './csrf.js';

const SET_ROSTER = 'roster/setRoster'

const setRoster = (roster) => ({
  type: SET_ROSTER,
  payload: roster
})

export const getRoster = (teamId) => async(dispatch) => {
  const res = await fetch(`/api/roster/${teamId}`,{
  });

  if(res.ok){
    dispatch(setRoster(res.data))
    return res
  }
}

const rosterReducer = (state={}, action) => {
  let newState 
  switch (action.type) {
    case SET_ROSTER:
      newState = {}
      action.payload.forEach(person => {
        if(!person.isCoach){
          newState[person.id] = person
        }
      })
      return newState
    default:
      return state
      
  }
}

export default rosterReducer