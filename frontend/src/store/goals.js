import { fetch } from './csrf.js';

const SET_GOALS = 'goals/setGoals'

const setGoals = (goals) => ({
  type: SET_GOALS,
  payload: goals
})

export const getGoals = userId => async(dispatch) => {
  const res = await fetch(`api/goals/${userId}`)

  if(res.ok){
    dispatch(setGoals(res.data))
    return res
  }
}

const goalsReducer = (state={}, action) => {
  let newState
  switch (action.type) {
    case SET_GOALS:
      newState={}
      action.payload.forEach(goal => {
        newState[goal.id] = goal
      })
      return newState
    default:
      return state
      
  }
}

export default goalsReducer