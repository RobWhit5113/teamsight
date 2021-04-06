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

let current_datetime = new Date()
let formatted_date = current_datetime.getFullYear() + "-0" + 
(current_datetime.getMonth() + 1) + 
"-0" + current_datetime.getDate()
const rosterReducer = (state={}, action) => {
  let newState 
  switch (action.type) {
    case SET_ROSTER:
      newState = {}
      action.payload.forEach(person => {
        if(!person.isCoach && 
          person.Surveys[0].createdAt.toString().slice(0,10) == formatted_date
          ){
          newState[person.id] = person
          person['score'] = person.Surveys[0].answerOne
          person['question'] = person.Surveys[0].question
        }
      })
      return newState
    default:
      return state
      
  }
}

export default rosterReducer