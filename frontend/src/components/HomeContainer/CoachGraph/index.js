import { Typography } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { getRoster } from '../../../store/roster';
import {useDispatch} from 'react-redux'
import './CoachGraph.css'




function CoachGraph(){
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user);
  const roster = useSelector(state => state?.roster)
  
// display all of the survey info for the swimmers that are on his team 
// need all swimmers where team id == user.teamId
// include all surveys where userId == Survey.userId
const teamId = sessionUser.teamId

  useEffect(async () => {
    dispatch(getRoster(teamId))
  }, [])

const athletes = Object.values(roster)
let sum = 0
let count = 0
athletes.forEach(athlete => {
   sum += athlete.Surveys[0].answerOne
   count+=1
})

  return (
    <>
    <div className="score-container">
      <div className="score-title">
        <Typography variant="h4" color="primary">Here's How Your Team Is Doing Today</Typography>
      </div>
        <div className="swimmer-score">
          <div className="score-calculation">
            <Typography variant="h5" color="secondary">
              {(sum/count).toFixed(1)}/5 
            </Typography>
          </div>
          <div className="score-text">
            <Typography variant="h6" color="primary">
              rating on the wellness survey!
            </Typography>
          </div>
        </div>
      </div>
    </>
  )
}

export default CoachGraph
