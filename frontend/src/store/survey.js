import {fetch} from './csrf.js'

const SET_SURVEY = 'survey/setSurvey'
const GET_SURVEYS = 'survey/getSurveys'

const setSurvey = survey => ({
  type: SET_SURVEY,
  payload: survey
})

const getSurveys = surveys => ({
  type: GET_SURVEYS,
  payload: surveys
})

export const completeSurvey = surveyData => async(dispatch) => {
  const res = await fetch('/api/survey', {
    method: 'POST',
    body: JSON.stringify(surveyData)
  });

  if(res.ok){
    dispatch(setSurvey(res.data.survey))
    return res
  }
}


const surveyReducer = (state={}, action) => {
  let newState
  switch (action.type) {
    case SET_SURVEY:
      newState = {}
      newState[action.payload.id] = action.payload
      return newState
    default:
      return state
      
  }
}

export default surveyReducer