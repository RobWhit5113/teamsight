import { fetch } from './csrf.js';

const SET_AVERAGE = 'surveys/setAverage'

const setAverage = (avg) => ({
  type: SET_AVERAGE,
  payload: avg
})

export const getAverage = (teamId) => async(dispatch) => {
  const res = await fetch(`/api/average/${teamId}`)

  if(res.ok) {
    dispatch(setAverage(res.data))
    return res
  }
}

const averageReducer = (state={}, action) => {
  let newState
  switch (action.type) {
    case SET_AVERAGE:
      newState = action.payload
      return newState
    default:
      return state
  }
}

export default averageReducer