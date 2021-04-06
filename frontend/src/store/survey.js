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

// export const getAllSurveys = () => async(dispatch) => {
//   const res = await fetch('/api/survey')

//   if(res.ok){
//     dispatch(getSurveys(res.data))
//   }
// }

// let current_datetime = new Date()
// let formatted_date = current_datetime.getFullYear() + "-0" + 
// (current_datetime.getMonth() + 1) + 
// "-0" + current_datetime.getDate()

const surveyReducer = (state={}, action) => {
  let newState
  switch (action.type) {
    case SET_SURVEY:
      newState = {}
      newState[action.payload.id] = action.payload
      return newState
    // case GET_SURVEYS:
    //   newState={}
    //   action.payload.forEach(survey => {
    //     if(!survey.User[0].isCoach &&
    //       survey.createdAt.toString().slice(0,10) == formatted_date){
    //         newState[survey.id] = survey
    //       }
    //   })
      // return newState
    default:
      return state
      
  }
}

export default surveyReducer