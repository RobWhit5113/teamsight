import { fetch } from './csrf.js';

const SET_GOALS = 'goals/setGoals'
const NEW_GOAL = 'goals/newGoal'
const DEL_GOAL = 'goals/removeone'

const setGoals = (goals) => ({
  type: SET_GOALS,
  payload: goals
})

const newGoal = (goal) => ({
  type: NEW_GOAL,
  payload: goal
})

const removeOne = (id) => ({
  type: DEL_GOAL,
  payload: id
})

export const getGoals = userId => async(dispatch) => {
  const res = await fetch(`api/goals/${userId}`)

  if(res.ok){
    dispatch(setGoals(res.data))
    return res
  }
}

export const createGoal = goalInfo => async(dispatch) => {
  const res = await fetch('/api/goals', {
    method: 'POST',
    body: JSON.stringify(goalInfo)
  })

  if(res.ok){
    dispatch(newGoal(res.data))
    return res
  }
}

export const editGoal = ({id, userId, goal, type}) => async(dispatch) => {
  const res = await fetch(`/api/goals/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      userId,
      goal, 
      type
    })
  })
  if(res.ok){
    await dispatch(newGoal(res.data))
    return res
  }
}

export const deleteGoal = (id) => async(dispatch) => {
  const res = await fetch(`/api/goals/${id}`, {
    method: "DELETE"
  })

  if(res.ok) {
    dispatch(removeOne(id))
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
    case NEW_GOAL:
      newState = JSON.parse(JSON.stringify(state))
      newState[action.payload.newGoal.id] = action.payload.newGoal
      return newState
    case DEL_GOAL: 
      newState = JSON.parse(JSON.stringify(state))
      delete newState[action.payload]
      return newState
    default:
      return state
      
  }
}

export default goalsReducer